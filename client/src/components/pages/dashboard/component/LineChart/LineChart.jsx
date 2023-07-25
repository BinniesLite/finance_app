import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import PropTypes from 'prop-types';
const LineChart = ({ data }) => {
  return (
    <AreaChart
      width={400}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id='colorexpense' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#ff5959' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#ff5959' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='colorincome' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='expense'
        stroke='#8884d8'
        fillOpacity={1}
        fill='url(#colorexpense)'
      />
      <Area
        type='monotone'
        dataKey='income'
        stroke='#82ca9d'
        fillOpacity={1}
        fill='url(#colorincome)'
      />
    </AreaChart>
  );
};

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LineChart;
