import * as React from 'react';
import Chip from '@mui/material/Chip';
import MUIDataTable, { TableFilterList } from 'mui-datatables';
import appContext from '../../../context/app/context';
import Spinner from '../../Layout/Spinner/Spinner';

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
    },
  },
];

const options = {
  filterType: 'checkbox',
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
      data={loading ? <Spinner /> : data}
      columns={columns}
      options={options}
    />
  );
};

export default CustomTable;
