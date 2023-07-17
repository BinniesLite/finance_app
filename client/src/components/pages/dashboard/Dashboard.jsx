import React, { useState, useEffect } from 'react';
import Section from '../../Layout/Section/Section';
import LineChart from './component/LineChart/LineChart';
import PieCharts from './component/PieChart/PieCharts';
import DBCard from './component/DBCard/DBCard';
import CustomTable from '../../general/table/CustomTable';
import { Grid, Stack } from '@mui/material';
import { HiCurrencyDollar } from 'react-icons/hi';

//api
import { getTransactions } from '../../../utils/http-request';
import AddWallet from '../../Layout/AddWallet/AddWallet';

const Dashboard = () => {
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
  //hardcoded data for the charts
  const lineData = [
    {
      name: 'Jan',
      expense: 4000,
      income: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      expense: 3000,
      income: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      expense: 2000,
      income: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      expense: 2780,
      income: 3908,
      amt: 2000,
    },
    {
      name: 'Ma',
      expense: 1890,
      income: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      expense: 2390,
      income: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      expense: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      expense: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      expense: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      expense: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      expense: null,
      income: null,
      amt: 0,
    },
    {
      name: 'Dec',
      expense: null,
      income: null,
      amt: 2100,
    },
  ];

  const pieData = [
    {
      name: 'Group A',
      value: 2400,
    },
    {
      name: 'Group B',
      value: 4567,
    },
    {
      name: 'Group C',
      value: 1398,
    },
    {
      name: 'Group D',
      value: 9800,
    },
    {
      name: 'Group E',
      value: 3908,
    },
    {
      name: 'Group F',
      value: 4800,
    },
  ];

  const cardData = [
    {
      name: 'Total Income',
      difference: 3000,
      positive: true,
      value: '23444',
      icon: <HiCurrencyDollar />,
    },
    {
      name: 'Total Expense',
      difference: 3000,
      positive: false,
      value: '23444',
    },
    {
      name: 'Total Balance',
      difference: 3000,
      positive: true,
      value: '23444',
    },
  ];
  return (
    <Section title='Dashboard'>
      <Grid
        container
        spacing={1}
        direction='row'
        justifyContent='space-between'
      >
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          // direction='column'
          justifyContent='space-around'
          alignItems='center'
          spacing={2}
        >
          <Stack direction='row' spacing={3} style={{ paddingBottom: '20px' }}>
            {cardData.map((card) => (
              <DBCard
                name={card.name}
                difference={card.difference}
                positive={card.positive}
                sx={{
                  width: '250px',
                  height: 'fit-content',
                  borderRadius: '10px',
                  boxShadow: ' 0px 10px 15px 5px rgba(0,0,0,0.1)',
                }}
                value={card.value}
                icon={card.icon}
              />
            ))}
          </Stack>
          <Stack
            spacing={1}
            sx={{
              paddingTop: '30px',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: ' 0px 10px 15px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h4 variant='h6'>Recent Transactions</h4>
            <p>Latest transaction all the time</p>
            <CustomTable data={transactionData} />
            <AddWallet />

          </Stack>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Stack direction='column' spacing={2}>
            <LineChart data={lineData} />
            <PieCharts pieData={pieData} />
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Dashboard;
