import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = () => {
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
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};
export default Expenses;
