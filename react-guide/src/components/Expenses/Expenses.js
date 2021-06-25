import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import {useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {
  const expenses = props.items;
  const [filteredyear, setFilteredYear] = useState("2022");
  const dateSelectHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredexpenses=expenses.filter(expense=>{
   return expense.date.getFullYear().toString()===filteredyear 
  })
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredyear}
          ondateselect={dateSelectHandler}
        />
        {filteredexpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
