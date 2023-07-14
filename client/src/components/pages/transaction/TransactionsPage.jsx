import { React, useState, useEffect } from 'react';
import Item from '@mui/material/ListItem';
import { Grid, Button, Typography, Avatar } from '@mui/material';
import { Row, Col } from 'reactstrap';
import TransactionComponent from '../../layout/AddTransactionComponent/Transaction';
import TransactionCard from '../../layout/TransactionCard/TransactionCard';
import './Transactions.css';

// api
import { postTransactions } from '../../../utils/http-request';
import { getTransactions } from '../../../utils/http-request';

import Section from "../../layout/Section/Section";

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  const handleCreateTransaction = async (transactionData) => {
    try {
      const newTransaction = await postTransactions(transactionData);
      setTransactions([...transactions, newTransaction]);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };
  return (
    <Section>
      <header>
        <div>
          <Row style={{ height: 'fit-content' }}>
            <Col xs={3} style={{ paddingTop: 35 }}>
              <Typography variant="h3" color="primary">
                Transactions
              </Typography>
            </Col>
            <Col xs={9} style={{ paddingLeft: 600 }}>
              {/* <Avatar
                src='./../../../assets/avatar-icon.png'
                sx={{ width: 50, height: 50 }}
                style={{
                  display: 'flex',
                  color: 'rgba(9, 48, 255)',
                  mixBlendMode: 'overlay',
                }}
              /> */}
            </Col>
          </Row>
        </div>
      </header>
      <div className='transaction-container'>
        <Row style={{ height: 'fit-content', padding: '30px' }}>
          <Col xs={3} style={{ paddingTop: 35 }}>
            <Grid item xs={2} md={2} className='blur-background'>
              <TransactionComponent
                onCreateTransaction={handleCreateTransaction}
              />
            </Grid>
          </Col>
          <Col
            xs={9}
            style={{
              paddingTop: 50,
            }}
          >
            <Grid container justify='space-around' spacing={2}>
              <Grid item xs={10} className='blur-background'>
                <Item>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    {/* {transactions.map((transaction) => (
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
                    ))} */}
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default TransactionPage;
