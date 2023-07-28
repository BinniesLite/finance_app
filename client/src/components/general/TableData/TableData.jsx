import * as React from 'react';
import Chip from '@mui/material/Chip';
import MUIDataTable, { TableFilterList } from 'mui-datatables';
import { formatDate } from '../../../utils/formatDate';

const columns = [
  {
    name: 'name',
    label: 'Wallet Name',
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
    name: 'createdAt',
    label: 'Date created',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => formatDate(value), // Format the date using formatDate function
    },
  },
];

const options = {
  filterType: 'dropdown',
  textLabels: {
    body: {
      noMatch: 'Loading wallets... hihi ^^',
    },
  },
};

const TableData = ({ data }) => {
  return (
    <MUIDataTable
      title={'Tracking'}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default TableData;
