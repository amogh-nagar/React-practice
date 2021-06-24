import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  //Without JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, {})
  // );

  const expenses = [
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
      date: new Date(2021, 6, 23),
    },
    {
      id: "e4",
      title: "Car insurance3",
      amount: 234.4,
      date: new Date(2021, 6, 23),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
    console.log("App.js!");
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
