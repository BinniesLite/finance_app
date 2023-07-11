import {React, useState} from "react";
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

import Section from "../../Layout/Section/Section";

import { getTransactions } from "../../../utils/http-request";
const TransactionPage = () => {
  const fetchTransactions = async () => {
    const transactions = await getTransactions();
    return transactions;
  }; 
  const generateFakeData = (numberOfData) => {
    const fakeData = [];
    const type = ["credit card", "cash"];
    for (let i = 1; i <= numberOfData; i++) {
      fakeData.push({
        id: i,
        name: `Wallet ${i}`,
        amount: Math.floor(Math.random() * 1000) + 1,
        date: "02/06/23",
        type: "hello",
      });
    }

    return fakeData;
  };
  const transactions = generateFakeData(10);
  const test = fetchTransactions();
  console.log(test);
  return (
    <div>
      <Section title={"Transaction"}>
        <Stack
          direction={{ xs: "column", md: "row", width: "100%" }}
          columnGap={3}
        >
          <Stack flexDirection="column" width="100%" ml={2}>
            <CustomTabs />
          </Stack>
        </Stack>
      </Section>
      <Section>
        {true && (
          <div className="transaction-container">
            <Grid container justify="space-around" spacing={2}>
              <Item>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8 }}
                  columns={{ xs: 3, sm: 8, md: 12 }}
                >
                  {transactions.map((transaction) => (
                    <Grid
                      item
                      xs={2}
                      sm={3}
                      md={4}
                      key={transaction.id}
                      paddingBottom={3}
                    >
                      <Item>
                        <TransactionCard
                          name={transaction.name}
                          amount={transaction.amount}
                          date={transaction.date}
                          type={transaction.type}
                        />
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Item>
            </Grid>
          </div>
        )}
        {
          false && (
            <div>
              <Typography>
              hello
            </Typography>
            </div>
          )
        }
      </Section>
    </div>
  );
};

export default TransactionPage;
