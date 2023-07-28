import React, { useState, useEffect, useContext } from 'react';
import Section from '../../Layout/Section/Section';
import LineChart from './component/LineChart/LineChart';
import PieCharts from './component/PieChart/PieCharts';
import DBCard from './component/DBCard/DBCard';
import RecentTable from './component/RecentTable/RecentTable';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

//api
import { getTransactions, getWallets } from '../../../utils/http-request';
import appContext from '../../../context/app/context';

//image
import char5 from '../../../assets/char5.svg';
import assistant from '../../../assets/assistant.webp';
import { HiCurrencyDollar } from 'react-icons/hi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';

//styling
import './Dashboard.css';

const Dashboard = () => {
  // const [transactionData, setTransactionData] = useState([]);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const {
    wallets,
    transactions,
    getWallets,
    getTransactions,
    totalIncome,
    getTotalIncome,
    totalExpenses,
    getTotalExpenses,
    totalBalance,
    getTotalBalance,
  } = useContext(appContext);

  //fetch transaction data
  useEffect(() => {
    const fetchTransactions = async () => {
      await getTransactions();
    };

    fetchTransactions();
  }, []);

  //fetch wallet data
  useEffect(() => {
    const fetchWallets = async () => {
      await getWallets();
    };

    fetchWallets();
  }, []);

  //fetch total income
  useEffect(() => {
    const fetchTotalIncome = async () => {
      await getTotalIncome();
    };

    fetchTotalIncome();
  }, []);

  //fetch total expenses
  useEffect(() => {
    const fetchTotalExpenses = async () => {
      await getTotalExpenses();
    };
    fetchTotalExpenses();
  }, []);

  //fetch total balance
  useEffect(() => {
    const fetchTotalBalance = async () => {
      await getTotalBalance();
    };
    fetchTotalBalance();
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
      name: 'Savings',
      value: 1000,
    },
    {
      name: 'Transportation',
      value: 128,
    },
    {
      name: 'Food Budget',
      value: 400,
    },
    {
      name: 'Shopping',
      value: 200,
    },
    {
      name: 'Rent',
      value: 600,
    },
    {
      name: 'Emergency Fund',
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
        spacing={3}
        direction='row'
        justifyContent='space-between'
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={8}
          justifyContent='space-around'
          alignItems='center'
          spacing={2}
        >
          <Stack
            className='rubberBand'
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            sx={{
              background:
                'linear-gradient(180deg, hsla(348, 88%, 66%, 1) 0%, hsla(36, 89%, 68%, 1) 100%)',
              filter:
                'progid: DXImageTransform.Microsoft.gradient( startColorstr="#f55c7a", endColorstr="#f6bc66", GradientType=1 )',
              height: '100px',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            {isSmallScreen ? (
              <Typography
                variant='h4'
                sx={{ color: 'white', fontSize: '20px' }}
              >
                Welcome back, Trang!
              </Typography>
            ) : (
              <Typography
                variant='h4'
                sx={{ color: 'white', paddingRight: '50px' }}
              >
                Welcome back, Trang!
              </Typography>
            )}

            <img
              src={char5}
              style={{
                width: '200px',
                height: '200px',
                background: 'transparent',
                marginTop: '-80px',
              }}
            />
          </Stack>
          <Stack
            direction='row'
            spacing={3}
            sx={{ paddingBottom: '20px', justifyContent: 'center' }}
          >
            {/* total income card */}
            <DBCard
              name='Total Income'
              difference={10}
              positive={true}
              sx={{
                width: '250px',
                height: 'fit-content',
                borderRadius: '10px',
                boxShadow: '0px 10px 15px 5px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap',
              }}
              value={totalIncome} // Pass the fetched total income value
              icon={<HiCurrencyDollar />}
            />

            {/* total expense card */}
            <DBCard
              name='Total Expense'
              difference={10}
              positive={true}
              sx={{
                width: '250px',
                height: 'fit-content',
                borderRadius: '10px',
                boxShadow: '0px 10px 15px 5px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap',
              }}
              value={totalExpenses}
              icon={<GiReceiveMoney />}
            />

            {/* totbal balance card */}
            <DBCard
              name='Total Balance'
              difference={10}
              positive={true}
              sx={{
                width: '250px',
                height: 'fit-content',
                borderRadius: '10px',
                boxShadow: '0px 10px 15px 5px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap',
              }}
              value={totalBalance}
              icon={<MdOutlineAccountBalanceWallet />}
            />
          </Stack>
          <Stack direction='row'>
            <div
              style={
                !isSmallScreen
                  ? {
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: 'fit-content',
                      width: '100%',
                      padding: '5px',
                      paddingTop: '20px',
                      background: 'white',
                      borderRadius: '10px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }
                  : {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      padding: '30px',
                      background: 'white',
                      borderRadius: '10px',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }
              }
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: '30px',
                }}
              >
                <LineChart data={lineData} />
                <Typography variant='h6'>Income vs Expense</Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '-40px',
                }}
              >
                <PieCharts wallets={pieData} />
                <Typography variant='h6' sx={{ marginTop: '20px' }}>
                  Category
                </Typography>
              </div>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
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
            <RecentTable
              walletsData={wallets}
              transactionsData={transactions}
            />
          </Stack>
          <Stack sx={{ paddingTop: '30px' }}>
            <img
              src={assistant}
              style={{ width: '100%', zIndex: '1', borderRadius: '10px' }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Dashboard;