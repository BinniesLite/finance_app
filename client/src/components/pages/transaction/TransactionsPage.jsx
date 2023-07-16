import { React, useState, useEffect } from "react";
import "./Transactions.css"; 
import { Grid, Button, Typography, Avatar, Stack } from "@mui/material";
import CustomTabs from "../../general/CustomTabs";

import CustomTable from "../../general/table/CustomTable";
import Section from "../../layout/Section/Section";
import TransactionGridView from "../../Layout/TransactionGridView/TransactionGridView";
import { getTransactions} from "../../../utils/http-request";
import { formatTransactionList } from "../../../utils/helper";

const TransactionPage = () => {
  var [activeTab, setView] = useState(0);

  const changeView = (event, newView) => {
    setView(newView);
  };
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactions = await getTransactions();
        const formattedTransaction = await formatTransactionList(transactions);
        setTransactionData(formattedTransaction);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransactions();
  }, []);
const tabs = [
    {
      id: "list",
      label: "List",
      component: <CustomTable data={transactionData} />,
    },
    {
      id: "grid",
      label: "Grid",
      component: <TransactionGridView transactions={transactionData}/>,
    },
  ];
  return (
    <div>
      <Section title={"Transaction"}>
        <Stack
          direction={{ xs: "column", md: "row", width: "100%" }}
          columnGap={3}
        >
          <Stack flexDirection="column" width="100%" ml={2}>
            <CustomTabs
              tabs={tabs}
              activeTab={activeTab}
              handleChangeTab={changeView}
            />
          </Stack>
        </Stack>
        {tabs[activeTab].component}
      </Section>
    </div>
  );
};

export default TransactionPage;