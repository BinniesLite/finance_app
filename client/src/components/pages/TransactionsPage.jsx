import { React, useState } from "react";
import "../../styles/Transactions.css";
import TransactionComponent from "../Layout/Transaction";
import TransactionCard from "../Layout/TransactionComponents";
import Item from "@mui/material/ListItem";
import { Grid, Button } from "@mui/material";

const TransactionPage = () => {
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
  return (
    <>
      <header>Wallets</header>
      <div className="transaction-container">
        <Grid
          container
          justify="space-around"
          spacing={2}
          style={{
            paddingTop: 50,
          }}
        >
          <Grid
            item
            xs={2}
            md={2}
            style={{
              background: "rgba(255,255,255, 0.3)",
              border: 1,
              borderRadius: 30,
            }}
          ><TransactionComponent />
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              background: "rgba(255,255,255, 0.3)",
              border: 1,
              borderRadius: 30,
            }}
          >
            <Item>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {transactions.map((transaction) => (
                  <Grid
                    item
                    xs={2}
                    sm={4}
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
        </Grid>
      </div>
    </>
  );
};

export default TransactionPage;
