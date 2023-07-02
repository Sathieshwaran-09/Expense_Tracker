import React from 'react'

const Income = ({ transactions }) => {

  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((amount, item) => (amount += item), 0)
    .toFixed(2);

  return (
    <div className="alert alert-success p-4 d-flex align-items-center justify-content-between">
      Balance : Rs {income}
    </div>
  );
};

export default Income