import "./NewExpense.css";
import Expenseform from "./ExpenseForm";
const NewExpense = (props) => {
  const expensedatahandler = (enteredexpensedata) => {
    const expenseData = {
      ...enteredexpensedata,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <Expenseform ExpenseData={expensedatahandler} />
    </div>
  );
};

export default NewExpense;
