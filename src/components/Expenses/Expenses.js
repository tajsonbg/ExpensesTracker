import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={enteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items ={filteredExpenses} />
    </Card>
    </div>
  );
};

export default Expenses;
