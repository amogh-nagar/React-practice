import {useState} from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredusername, setenteredusername] = useState("");
  const [enteredage, setenteredage] = useState("");
  const [error, seterror] = useState();
  const adduserhandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredage < 1) {
      seterror({
        title: "Invalid age",
        message: "Please enter a valid  age(greater than zero)",
      });
      return;
    }
    // console.log(enteredusername,enteredage);
    props.onadduser(enteredusername, enteredage);
    setenteredage("");
    setenteredusername("");
  };
  const usernamechangehandler = (e) => {
    setenteredusername(e.target.value);
  };

  const agechangehandler = (e) => {
    setenteredage(e.target.value);
  };

const okayerrorhandler=()=>{
    seterror(null)
}

  return (
    <div>
      {error && (
        <ErrorModal onokay={okayerrorhandler} title={error.title} message={error.message} />
      )}
      <Card className={styles.input}>
        <form onSubmit={adduserhandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredusername}
            onChange={usernamechangehandler}
            id="username"
            type="text"
          />
          <label htmlFor="age">Age (years)</label>
          <input
            value={enteredage}
            onChange={agechangehandler}
            id="age"
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
