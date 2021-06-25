import "./Expenses.css";
import {useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const expenses = props.items;
  const [filteredyear, setFilteredYear] = useState("2022");
  const dateSelectHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredexpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredyear}
          ondateselect={dateSelectHandler}
        />
        <ExpensesChart expenses={filteredexpenses}/>
        <ExpensesList  items={filteredexpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
