import React, { useState, useContext } from "react";
import { GlobalContext } from "./../ContextAPI/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransactionHandler } = useContext(GlobalContext);

  const textHandler = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransactionHandler(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={textHandler}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense , positive - income)
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={amountHandler}
            placeholder="Enter amount..."
          />
        </div>
        <button>Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
