import {useRef, useState, useContext} from "react";
import Authcontext from "../context/auth";
import {useHistory} from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const emailref = useRef();
  const passwordref = useRef();

  const authctx = useContext(Authcontext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const [isloading, setisloading] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();

    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    let url;
    //Validate
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCSOlS9XYJ3JIHPyyVFgEUZ_7lH5DbB2_0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCSOlS9XYJ3JIHPyyVFgEUZ_7lH5DbB2_0";
    }
    setisloading(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredemail,
        password: enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setisloading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // console.log(data);
            let errMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errMessage = data.error.message;
            }

            throw new Error(errMessage);
            //Password should be atleast 6 characters long
          });
          // throw new Error('Failed to send data')
        }
      })
      .then((data) => {
        console.log(data);
        console.log(new Date(new Date().getTime() + +data.expiresIn * 1000));
        // const expirationTime = new Date(
        //   new Date().getTime() + +data.expiresIn * 1000
        // );
        // authctx.login(data.idToken, expirationTime.toISOString());
        console.log(Date.now());
        authctx.login(data.idToken, Date.now() + +data.expiresIn * 1000);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" ref={emailref} id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordref} required />
        </div>
        <div className={classes.actions}>
          {!isloading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isloading && <p>Loading!!</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
