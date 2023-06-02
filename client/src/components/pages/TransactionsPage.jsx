import { React, useState } from "react";
import "../../styles/Transactions.css";
import TransactionCard from "../Layout/TransactionComponents";
import Item from "@mui/material/ListItem";
import { Grid, Button } from "@mui/material";

const TransactionPage = () => {
//   function generateRandomDate() {
//     return new Date(+new Date() - Math.floor(Math.random() * 10000000000));
//   }
  const generateFakeData = (numberOfData) => {
    const fakeData = [];
    // newDate = generateRandomDate().toString();
    // console.log(newDate);
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
      <body>
        <div className="transaction-container">
          <Grid
            container
            justify="space-around"
            spacing={2}
            style={{
              paddingTop: 50,
            }}
          >
            <Grid item xs={2}>
              <Button>Transaction component will go here.</Button>
            </Grid>
            <Grid
              item
              xs={10}
              style={{
                backgroundColor: "grey",
              }}
            >
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
            </Grid>
          </Grid>
        </div>
      </body>
    </>
  );
};

export default TransactionPage;
