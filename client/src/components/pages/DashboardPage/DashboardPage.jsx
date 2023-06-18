import { React, useState } from "react";
import "./DashboardPage.css";
import TransactionComponent from "../../Layout/AddTransactionComponent/Transaction";
import TransactionCard from "../../Layout/TransactionCard/TransactionCard";
import Item from "@mui/material/ListItem";
import { Grid, Button, Typography, Avatar } from "@mui/material";
import { Row, Col } from "reactstrap";
import WalletComponent from "../../Layout/WalletComponent/WalletComponent";
import { faker } from "@faker-js/faker";
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

  const generateFakeUser = () => {
    const fakeUser = {
      name: faker.person.fullName(),
      balance: Math.floor(Math.random() * 1000) + 1,
      income: Math.floor(Math.random() * 1000) + 1,
      saving: Math.floor(Math.random() * 1000) + 1,
    };
    return fakeUser;
  };
  const transactions = generateFakeData(10);
  const user = generateFakeUser();
  return (
    <>
      <div class="intro-bar">
        <Grid
          style={{
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Avatar
            src="./../../../assets/avatar-icon.png"
            style={{
              height: 90,
              width: 90,
              color: "rgba(9, 48, 255)",
              mixBlendMode: "overlay",
            }}
          />
          <Typography variant="title" component="div">
            {user.name}
          </Typography>
        </Grid>
      </div>
      <div className="dashboard-container">
        <Row style={{ height: "fit-content", padding: "30px" }}>
          <Col xs={3}>
            <Grid item xs={2} md={2} className="blur-background">
              <WalletComponent />
            </Grid>
          </Col>
          <Col className="info-component">
            <Row>
              <Grid item xs={2} md={2} className="blur-background" style = {{
                marginBottom: 30,
              }}>
                <Row>
                  <Col>
                    <Typography variant="h6">
                      Balance: ${user.balance}
                    </Typography>
                  </Col>
                  <Col>
                    <Typography variant="h6">Saving: ${user.saving}</Typography>
                  </Col>
                </Row>
                <Typography variant="h6">Income ${user.income}</Typography>
              </Grid>
            </Row>
            <Row>
              <Grid item xs={2} md={2} className="blur-background" style = {{
                height: 480,
                display: "flex",
              }}>
                <Row>
                  <Typography variant="h3">Reports</Typography>
                </Row>
              </Grid>
            </Row>
          </Col>
          <Col xs={3}>
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
