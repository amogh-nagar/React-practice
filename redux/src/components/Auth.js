import classes from "./Auth.module.css";
import {useSelector, useDispatch} from "react-redux";
import {authActions} from "../store/auth";
const Auth = () => {
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const loginhandler = (e) => {
    e.preventDefault();
    console.log("loginhandler");
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginhandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
