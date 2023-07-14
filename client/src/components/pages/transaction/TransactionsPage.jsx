import { React, useState, useEffect } from "react";
import "./Transactions.css";
import TransactionComponent from "../../Layout/AddTransactionComponent/Transaction";
import TransactionCard from "../../Layout/TransactionCard/TransactionCard";
import Item from "@mui/material/ListItem";
import { Grid, Button, Typography, Avatar, Stack } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomTabs from "../../general/CustomTabs";
import { Row, Col } from "reactstrap";
import CustomTable from "../../general/table/CustomTable";
import Section from "../../Layout/Section/Section";
import TransactionGridView from "../../Layout/TransactionGridView/TransactionGridView";
import { getTransactions } from "../../../utils/http-request";

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
        setTransactionData(transactions);
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
