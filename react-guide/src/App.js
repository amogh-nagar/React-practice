import Expenses from "./components/Expenses/Expenses";
import {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 23.43,
    date: new Date(2021, 6, 23),
  },
  {
    id: "e2",
    title: "Car insurance1",
    amount: 2332.23,
    date: new Date(2021, 6, 23),
  },
  {
    id: "e3",
    title: "Car insurance2",
    amount: 32423.32,
    date: new Date(2019, 6, 23),
  },
  {
    id: "e4",
    title: "Car insurance3",
    amount: 234.4,
    date: new Date(2020, 6, 23),
  },
];

const App = () => {
  //Without JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, {})
  // );

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    // console.log("App.js!");
    setExpenses((prevState) => [ expense,...prevState]);
  };

  //With JSX
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
