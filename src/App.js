import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Remaining from "./components/Remaining.js";
import ExpenseList from "./components/ExpenseList.js";
import AddExpenseForm from "./components/AddExpenseForm.js";
import Income from "./components/Income.js";
import Expense from "./components/Expense.js";

const App = () => {

 const [transactions, setTransactions] = useState([]);

 useEffect(() => {
   let array = localStorage.getItem("expense");
   if (array) {
     let obj = JSON.parse(array);
     setTransactions(obj);
   }
 }, []);

const deleteTransaction = (id) => {
  const temp = transactions.filter((transaction) => transaction.id !== id);
  setTransactions(temp);
 localStorage.setItem("expense", JSON.stringify(temp)); 
};

const addTransaction = (transaction) => {
   setTransactions((transactions) => [transaction, ...transactions]);
   let temp = transactions;
   temp.push(transaction);
  localStorage.setItem("expense", JSON.stringify(temp));
};

  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Remaining transactions={transactions}></Remaining>
        </div>
        <div className="col-sm">
          <Income transactions={transactions}></Income>
        </div>
        <div className="col-sm">
          <Expense transactions={transactions}></Expense>
        </div>
      </div>
      <h3 className="mt-3">Expense History</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          ></ExpenseList>
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpenseForm addTransaction={addTransaction}></AddExpenseForm>
        </div>
      </div>
    </div>
  );
};
export default App;
