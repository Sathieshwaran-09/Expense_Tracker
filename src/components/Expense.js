import React from 'react'

const Expense = ({ transactions }) => {

    const amount = transactions.map((transaction) => transaction.amount);
    const expense = (
        //Amount is an array and item is an element in array
      amount
        .filter((item) => item < 0)
        .reduce((temp, item) => (temp += item), 0)
        .toFixed(2) * -1
    ).toFixed(2);

  return (
    <div className="alert alert-danger p-4 d-flex align-items-center justify-content-between">
      Expense : Rs {expense}
    </div>
  );
};

export default Expense