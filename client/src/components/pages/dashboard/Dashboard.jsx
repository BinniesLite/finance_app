import React from 'react';
import Section from '../../Layout/Section/Section';
import LineChart from './component/LineChart/LineChart';
import PieCharts from './component/PieChart/PieCharts';
import DBCard from './component/DBCard/DBCard';

const Dashboard = () => {
  //hardcoded data for the charts
  const lineData = [
    {
      name: 'January',
      expense: 4000,
      income: 2400,
      amt: 2400,
    },
    {
      name: 'February',
      expense: 3000,
      income: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      expense: 2000,
      income: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      expense: 2780,
      income: 3908,
      amt: 2000,
    },
    {
      name: 'May',
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
      name: 'August',
      expense: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'September',
      expense: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'October',
      expense: 3490,
      income: 4300,
      amt: 2100,
    },
    {
      name: 'November',
      expense: null,
      income: null,
      amt: 0,
    },
    {
      name: 'December',
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
  return (
    <Section title='Dashboard'>
      <LineChart data={lineData} />
      <PieCharts pieData={pieData} />
      <DBCard difference={3000} positive={true} sx={{ width: '300px', height: '300px'}} value='23444' />
    </Section>
  );
};

export default Dashboard;
