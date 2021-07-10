import classes from './StartingPageContent.module.css';
import Authcontext from '../context/auth';
import { useContext } from 'react';
const StartingPageContent = () => {
const authctx=useContext(Authcontext)

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      {authctx.isLoggedIn && <p>{authctx.timer}</p>}
    </section>
  );
};

export default StartingPageContent;
