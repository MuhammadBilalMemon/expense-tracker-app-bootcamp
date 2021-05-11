import React, { useContext } from "react";
import { GlobalContext } from "./../ContextAPI/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransactionHandler } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransactionHandler(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
