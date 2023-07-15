import { React } from "react";
import { Grid } from "@mui/material";
import Item from "@mui/material/ListItem";
import TransactionCard from "../TransactionCard/TransactionCard";
import Section from "../../../../layout/Section/Section";
import "./TransactionGridView.css";

const TransactionGridView = ({ transactions }) => {
  console.log("In grid", transactions);
  return (
    <Section>
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
                      name={transaction.walletId}
                      amount={transaction.amount}
                      date={transaction.createdAt}
                      type={transaction.type}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>
      </div>
    </Section>
  );
};

export default TransactionGridView;
