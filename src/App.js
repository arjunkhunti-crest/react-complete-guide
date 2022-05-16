import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 3, 12),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 899.99,
    date: new Date(2021, 10, 17),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.43,
    date: new Date(2021, 3, 30),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 7, 25),
  },
];

const App = () => {
  // To add some tag in regular js file

  // const para = document.createElement("p");
  // para.textContent = "This is paragraph created with regular js";
  // document.getElementById("root").append(para);

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  //  return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h2", null, "Let's get started!"),
  //   React.createElement(Expenses, {expenses: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
