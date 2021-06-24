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

  //With JSX
  return (
    <div>
      <NewExpense/>
      <Expenses />
    </div>
  );
};

export default App;
