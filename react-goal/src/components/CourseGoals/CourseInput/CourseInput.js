import React, {useState} from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = style.div`

//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color:${(props)=>(props.invalid ? "red":"black")};
// }

// & input {
//   display: block;
//   width: 100%;
//   background-color:${(props) => (props.invalid ? "salmon" : "transparent")};
//   border:1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }


// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isvalid, setisvalid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisvalid(false);
     console.log('inside');
     console.log(isvalid);
      return;
    }
    // console.log('inside');

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isvalid && styles.invalid}`}
        invalid={!isvalid}
        // className={!isvalid && "invalid" }
      >
        <label
        // style={{color: !isvalid ? "red" : "black"}}
        >
          Course Goal
        </label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
