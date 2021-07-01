import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {
  const amountinputref = useRef();
  const [amountisvalid, setamountisvalid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredamount = +amountinputref.current.value;

    if (
      enteredamount > 5 ||
      enteredamount < 1 ||
      enteredamount === 0
    ) {
      setamountisvalid(false);

      return;
    }

    props.onaddtocart(enteredamount);
  };

  return (
    <form action="" onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountinputref}
        label="Amount"
        input={{
          id: Math.floor(Math.random() * 100).toString(),
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountisvalid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
