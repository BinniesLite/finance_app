import { React, useState } from "react";
import "./DashboardPage.css";
import TransactionComponent from "../../Layout/AddTransactionComponent/Transaction";
import TransactionCard from "../../Layout/TransactionCard/TransactionCard";
import Item from "@mui/material/ListItem";
import { Grid, Button, Typography, Avatar } from "@mui/material";
import { Row, Col } from "reactstrap";
import WalletComponent from "../../Layout/WalletComponent/WalletComponent";

const DashboardPage = () => {
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
          <Col className = "intro-bar">
            <Row style={{ height: "fit-content" }}>
              <Avatar
                src="./../../../assets/avatar-icon.png"
                sx={{ width: 50, height: 50 }}
                style={{
                  display: "flex",
                  color: "rgba(9, 48, 255)",
                  mixBlendMode: "overlay",
                }}
              />
            </Row>
            <Row>
              <Typography>Jane doe</Typography>
            </Row>
          </Col>
        </div>
      </header>
      <div className="dashboard-container">
        <Row style={{ height: "fit-content", padding: "30px" }}>
          <Col xs={3} style={{ paddingTop: 35 }}>
            <Grid item xs={2} md={2} className="blur-background">
              <WalletComponent />
            </Grid>
          </Col>
          <Col xs={3} style={{ paddingTop: 35 }}>
            <Grid item xs={2} md={2} className="blur-background">
              <TransactionComponent />
            </Grid>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardPage;
