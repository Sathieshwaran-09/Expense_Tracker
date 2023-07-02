import React, { useState } from 'react'
import { nanoid } from "nanoid";

const AddExpenseForm = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const income=(e)=>{
     if (text !== "" && amount !== "") {
       let transaction = {
         id: nanoid(),
         text: text,
         amount: +amount,
       };
       addTransaction(transaction);
       setText("")
       setAmount("")
     } else {
       alert("Please fill the all fields");
     }
  }

  const expense = (e) => {
    if (text !== "" && amount !== "") {
      let transaction = {
        id: nanoid(),
        text: text,
        amount: +amount * -1,
      };
      addTransaction(transaction);
      setText("");
      setAmount("");
    } else {
      alert("Please fill the all fields");
    }
  };
 
  return (
    <div className="row">
      <div className="col-sm col-lg-4">
        <label>Name</label>
        <input
          value={text}
          className="form-control"
          type="text"
          placeholder="Enter Expense Name"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="col-sm col-lg-4">
        <label>Amount</label>
        <input
          value={amount}
          className="form-control"
          type="number"
          placeholder="Total Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="row mt-4 ">
        <div className="col-sm col-lg-4">
          <button
            style={{ width: "100%", marginLeft: "2px" }}
            type="button"
            className="btn btn-success"
            onClick={() => {
              income();
            }}
          >
            Income
          </button>
        </div>
        <div className="col-sm col-lg-4">
          <button
            style={{ width: "100%", marginLeft: "10px"}}
            type="button"
            className="btn btn-danger"
            onClick={() => {
              expense();
            }}
          >
            Expense
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm col-lg-8">
          <button
            style={{ width: "102%" }}
            type="button"
            className="btn btn-primary"
            onClick={() => (setText(""), setAmount(""))}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;