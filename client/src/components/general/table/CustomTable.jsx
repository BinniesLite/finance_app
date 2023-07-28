import * as React from 'react';
import Chip from '@mui/material/Chip';
import MUIDataTable, { TableFilterList } from 'mui-datatables';
import appContext from '../../../context/app/context';

const columns = [
  {
    name: 'walletName',
    label: 'Wallet Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'amount',
    label: 'Amount',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'createdAt',
    label: 'Date created',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'description',
    label: 'Description',
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: 'type',
    label: 'Type',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => {
        // Define a function to render the type with different colors
        const typeColor = value === 'income' ? 'green' : 'red';
        return (
          <Chip
            label={value}
            style={{ color: typeColor, bacgroundColor: 'none' }}
          />
        );
      },
    },
  },
];

const options = {
  filterType: 'dropdown',
  textLabels: {
    body: {
      noMatch: 'Let sip a tea while the transactions are loaded... hihi :)',
    },
  },
};
const CustomTable = ({ transactions }) => {
  const data = transactions;
  const { loading } = React.useContext(appContext);
  return (
    <MUIDataTable
      title={'Transaction List'}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default CustomTable;
