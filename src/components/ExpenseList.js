import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ transactions, deleteTransaction }) => {

    const [filteredExpenses, setfilteredExpenses] = useState(transactions || [] );
    useEffect(() => {
      setfilteredExpenses(transactions);
    }, [transactions]);

const handleChange = (event) => {
  const searchResults = transactions.filter((transaction) =>
    transaction.text.toLowerCase().includes(event.target.value.toLowerCase())
  );
  setfilteredExpenses(searchResults);
};

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      {
      transactions.length ? (
      <ul className="list-group">
        {filteredExpenses.map((transaction) => {
          return (
            <ExpenseItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          );
        })}
      </ul>
      ) : (<p>No expenses to display.</p>
      )
    }
    </>
  );
}

export default ExpenseList;