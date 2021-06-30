import {useState, useRef} from "react";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
  const nameinputref = useRef();
  const ageinputref = useRef();

  // const [enteredusername, setenteredusername] = useState("");
  // const [enteredage, setenteredage] = useState("");
  const [error, seterror] = useState();
  const adduserhandler = (event) => {
    event.preventDefault();
    const enteredname = nameinputref.current.value;
    const entereduserage = ageinputref.current.value;
    if (enteredname.trim().length === 0 || entereduserage.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+entereduserage < 1) {
      seterror({
        title: "Invalid age",
        message: "Please enter a valid  age(greater than zero)",
      });
      return;
    }
    props.onadduser(enteredname, entereduserage);
    //Uncontrolled components
    nameinputref.current.value = "";
    ageinputref.current.value = '';
    // setenteredage("");
    // setenteredusername("");
  };
  // const usernamechangehandler = (e) => {
  //   setenteredusername(e.target.value);
  // };

  // const agechangehandler = (e) => {
  //   setenteredage(e.target.value);
  // };

  const okayerrorhandler = () => {
    seterror(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onokay={okayerrorhandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={adduserhandler}>
          <label htmlFor="username">Username</label>
          <input
            // value={enteredusername}
            // onChange={usernamechangehandler}
            id="username"
            type="text"
            ref={nameinputref}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            // value={enteredage}
            // onChange={agechangehandler}
            id="age"
            type="number"
            ref={ageinputref}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
