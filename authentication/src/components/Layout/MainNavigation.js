import {Link} from "react-router-dom";
import {useContext} from "react";
import classes from "./MainNavigation.module.css";
import Authcontext from "../context/auth";

const MainNavigation = () => {
  const authctx = useContext(Authcontext);

  const logouthandler = () => {
    authctx.logout();
    //optional : redirect
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authctx.isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {authctx.isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {authctx.isLoggedIn && (
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
