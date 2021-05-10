import React, { useContext } from "react";

import { GlobalContext } from "./../ContextAPI/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((trans) => trans.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, crntItem) => (acc += crntItem), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, crntItem) => (acc += crntItem), 0) * -1;

  return (
    <div>
      <div>
        <h4>Income</h4>
        <p>+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
