import {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // let title = props.title;

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // console.log("Clicked!!");
    // title="Updated!"

    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
    // onClick={clickHandler()}
  );
};

export default ExpenseItem;
