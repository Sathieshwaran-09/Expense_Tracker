import React from "react";

const Remaining=({transactions})=>{

  let amount = transactions.map((transaction) => {
    return transaction.amount;
  });

  let total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
  return (
    <div className="alert alert-secondary p-4 d-flex align-items-center justify-content-between">
      <span>Total : Rs {total}</span>
    </div>
  );
}

export default Remaining;