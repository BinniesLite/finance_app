import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RecentTable = ({ walletsData, transactionsData }) => {
  // Convert the data object to an array and slice it to only include the first 5 elements
  const mergedData = transactionsData.map((transaction) => {
    const wallet = walletsData.find((wallet) => wallet.id === transaction.walletId);
    return {
      name: wallet?.name || 'Unknown Wallet',
      amount: transaction.amount,
    };
  });

  // Sort the mergedData by the most recent transactions
  const sortedData = mergedData.sort((a, b) => b.createdAt - a.createdAt);

  // Slice the data array to only include the first 5 elements
  const slicedData = sortedData.slice(0, 4);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650 }} aria-label='caption table'>
        <caption style={{ cursor: 'pointer' }}>
          <Link to='/transactions'>View More</Link>
        </caption>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Transaction</TableCell>
            <TableCell align='right' sx={{ fontWeight: 'bold' }}>Amount ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(slicedData).map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentTable;