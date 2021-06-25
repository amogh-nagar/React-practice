import "./NewExpense.css";
import Expenseform from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const expensedatahandler = (enteredexpensedata) => {
    const expenseData = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setToggle(false)
  };

  const [toggle, setToggle] = useState(false);
  const startEditing=()=>{
    setToggle(true)
  }
  
  const stopEditing=()=>{
   setToggle(false)
  }

  return (
    <div className="new-expense">
      {!toggle && <button onClick={startEditing}>Add New Item</button>}
      {toggle && <Expenseform ExpenseData={expensedatahandler} onEditing={stopEditing} />}
    </div>
  );
};

export default NewExpense;
