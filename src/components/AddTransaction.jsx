import React from "react";

const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div>
          <label htmlFor="text">Text</label>
          <input type="text" name="text" placeholder="Enter text..." />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense , positive - income)
          </label>
          <input type="number" name="amount" placeholder="Enter amount..." />
        </div>
        <button>Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
