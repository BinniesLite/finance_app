import { React, useState } from "react";
import "./Transactions.css";
import TransactionComponent from "../../Layout/AddTransactionComponent/Transaction";
import TransactionCard from "../../Layout/TransactionCard/TransactionCard";
import Item from "@mui/material/ListItem";
import { Grid, Button, Typography, Avatar } from "@mui/material";
import { Row, Col } from "reactstrap";
import NavBar from "../../Layout/NavBar/NavBar";
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
      <header>
        <div>
          <Row style={{ paddingBottom: 40 }}>
            <NavBar />
          </Row>
          <Row style={{ height: "fit-content" }}>
            <Col style={{ paddingTop: 35 }}>Transactions</Col>
          </Row>
        </div>
      </header>
      <div className="transaction-container">
        <Row style={{ width: "100vw", height: "fit-content", padding: "30px" }}>
          <Col xs={2} style={{ paddingTop: 35 }}>
            <Grid className="blur-background">
              <TransactionComponent />
            </Grid>
          </Col>
          <Col
            xs={10}
            style={{
              paddingTop: 50,
            }}
          >
            <Grid container justify="space-around" spacing={2}>
              <Grid item xs={10} className="blur-background">
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
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TransactionPage;
