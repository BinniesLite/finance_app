import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { Stack, Typography, Box } from '@mui/material';

// const COLORS = [
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
//   '#FF8042',
//   '#c698f5',
//   '#fa5757',
// ];

const COLORS = {
  'Savings': '#74a4e3',
  'Transportation': '#ff6188',
  'Food Budget': '#49f5b6',
  'Shopping': '#ffc34d',
  'Rent': '#ffea00',
  'Emergency Fund': '#da96ff',
};

const PieCharts = ({ wallets }) => {
  // const pieData = Object.values(wallets).map((wallet) => ({
  //   name: wallet.name,
  //   value: wallet.balance || 100, // Replace null balance with 0 if necessary
  // }));

  return (
    <PieChart width={350} height={350}>
      <Pie
        dataKey='value'
        isAnimationActive={false}
        data={wallets}
        cx={350 / 2}
        cy={200}
        outerRadius={80}
        label
      >
        {wallets.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[entry.name] || '#8884d8'}
          />
        ))}
      </Pie>
      {/* <Tooltip /> */}
      <Legend />
    </PieChart>
  );
};

PieCharts.propTypes = {
  // wallets: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     userId: PropTypes.string,
  //     name: PropTypes.string.isRequired,
  //     balance: PropTypes.number,
  //     createdAt: PropTypes.string.isRequired,
  //     description: PropTypes.string,
  //   })
  // ).isRequired,
  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number,
    })
  ).isRequired,
};

export default PieCharts;