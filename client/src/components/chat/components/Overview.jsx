import React from "react";
import Options from "./Options";

const Overview = (props) => {
  console.log(props);
  const options = [
    {
      name: "Get total income",
      handler: props.actions.handleTotalIncome,
      id: 1,
    },
    {
      name: "Get total expenses",
      handler: props.actions.handleTotalExpense,
      id: 2,
    },
    {
      name: "Get total balance",
      handler: props.actions.handleTotalBalance,
      id: 3,
    },
    {
      name: "Give me some finance tips",
      handler: props.actions.handleTotalIncome,
      id: 4,
    }
  ];

  return <Options options={options} {...props} />;
};

export default Overview;
