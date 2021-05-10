import React, { useContext } from "react";

import { GlobalContext } from "./../ContextAPI/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((trans) => trans.amount);
  // console.log(amounts);
  const totalAmount = amounts.reduce(
    (startValue, currentItem) => (startValue += currentItem),
    0
  );
  // console.log(totalAmount);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalAmount}</h1>
    </>
  );
};

export default Balance;
