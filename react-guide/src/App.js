import Expenses from "./components/Expenses/Expenses";
import React from "react";

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
      <h1>Let's get started</h1>
      <Expenses />
    </div>
  );
};

export default App;
