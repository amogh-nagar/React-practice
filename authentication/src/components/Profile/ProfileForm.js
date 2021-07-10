import classes from "./ProfileForm.module.css";
import {useRef, useContext} from "react";
import Authcontext from "../context/auth";
import {useHistory} from 'react-router-dom'
const ProfileForm = () => {

  const history=useHistory()
  const newpasswordref = useRef();
  const authctx = useContext(Authcontext);
  const submithandler = (e) => {
    e.preventDefault();

    const enterednewpassword = newpasswordref.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCSOlS9XYJ3JIHPyyVFgEUZ_7lH5DbB2_0",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authctx.token,
          password: enterednewpassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if(res.ok){return res.json()}
        
      })
      .then((data) => {
        console.log(data);
        history.replace('/')
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <form onSubmit={submithandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input minLength="7" type="password" id="new-password" ref={newpasswordref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
