import React from "react";
import {TiDelete} from "react-icons/ti"

const ExpenseItem =({ transaction, deleteTransaction })=>{

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {transaction.text}
      <div>
        <span className="badge bg-primary rounded-pill mr-3">
          Rs {transaction.amount}
        </span>
        <TiDelete
          size="1.5em"
          onClick={() => deleteTransaction(transaction.id)}
        ></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;