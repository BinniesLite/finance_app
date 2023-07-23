import React from 'react';
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#c698f5',
  '#fa5757',
];

const PieCharts = ({ pieData }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey='value'
        isAnimationActive={false}
        data={pieData}
        cx={200}
        cy={200}
        outerRadius={80}
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

PieCharts.propTypes = {
  pieData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieCharts;
