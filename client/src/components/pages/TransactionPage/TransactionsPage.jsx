import { React, useState } from "react";
import "./Transactions.css";
import TransactionComponent from "../../Layout/AddTransactionComponent/Transaction";
import TransactionCard from "../../Layout/TransactionCard/TransactionCard";
import Item from "@mui/material/ListItem";
import {
  Grid,
  Button,
  Typography,
  Avatar,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  hexToRgb,
} from "@mui/material";
import { Row, Col } from "reactstrap";

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
  const [showUI, setShowUI] = useState(false);

  const toggleUI = () => {
    setShowUI(!showUI);
  };
  const getTextDisplay = () => {
    if (showUI) {
      return "List View";
    } else {
      return "Grid View";
    }
  };
  const transactions = generateFakeData(10);
  return (
    <>
      <header>
        <div>
          <Row style={{ height: "fit-content" }}>
            <Col xs={3} style={{ paddingTop: 35 }}>
              Transactions
            </Col>
            <Col xs={9} style={{ paddingLeft: 600 }}>
              <Avatar
                src="./../../../assets/avatar-icon.png"
                sx={{ width: 50, height: 50 }}
                style={{
                  display: "flex",
                  color: "rgba(9, 48, 255)",
                  mixBlendMode: "overlay",
                }}
              />
            </Col>
          </Row>
        </div>
      </header>
      <div className="transaction-container">
        <Row style={{ height: "fit-content", padding: "30px" }}>
          <Col xs={3} style={{ paddingTop: 35 }}>
            <Grid item xs={2} md={2} className="blur-background">
              <TransactionComponent />
            </Grid>
          </Col>
          <Col
            xs={9}
            style={{
              paddingTop: 5,
            }}
          >
            <Button
              className="filter-button"
              style={{
                backgroundColor: "#FFD600",
                color: "black",
              }}
              onClick={toggleUI}
            >
              {getTextDisplay()}
            </Button>
            <Grid container justify="space-around" spacing={2} paddingTop={1}>
              <Grid item xs={10} className="blur-background">
                {showUI && (
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
                )}
                {!showUI && (
                  <TableContainer component={Paper}>
                    <Table /*sx={{ minWidth: 650 }}*/ aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Wallet Name</TableCell>
                          <TableCell align="right">Date</TableCell>
                          <TableCell align="right">Amount&nbsp;($)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {transactions.map((transaction) => (
                          <TableRow
                            key={transaction.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {transaction.name}
                            </TableCell>
                            <TableCell align="right">
                              {transaction.date}
                            </TableCell>
                            <TableCell align="right">
                              {transaction.amount}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Grid>
            </Grid>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TransactionPage;
