import * as React from "react";
import Chip from "@mui/material/Chip";
import MUIDataTable, { TableFilterList } from "mui-datatables";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

const columns = [
  {
    name: "walletName",
    label: "Wallet Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "amount",
    label: "Amount",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "createdAt",
    label: "Date created",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "description",
    label: "Description",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "type",
    label: "Type",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const options = {
  filterType: "dropdown",
};

const CustomTable = ({ transactions, loading }) => {
  const data = transactions;

  return (
    <MUIDataTable
      title={"Transactions"}
      data={data}
      columns={columns}
      options={options}
      loading={loading}
    />
  );
};

export default CustomTable;
