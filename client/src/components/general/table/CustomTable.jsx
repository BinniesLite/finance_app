import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function getKeyList(data) {
  if (data == null || data.length === 0 || data[0] == null) {
    return [];
  }
  var listKeys = Object.keys(data[0]);
  listKeys.shift();
  return listKeys;
}


function getValueList(data, start, end) {
  var valueList = [];
  if (data == null || data.length === 0) {
    return valueList;
  }
  for (let i = 0; i < data.length; i++) {
    valueList.push(Object.values(data[i]));
  }
  return valueList;
}
const CustomTable = ({ data }) => {
  const listAttributes = getKeyList(data);
  const listValues = getValueList(data, 0, 1);
  return (
    <TableContainer
      component={Card}
      style={{
        maxWidth: 1240,
        marginBottom: 50,
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell key={"count"}>Count</TableCell>
            {listAttributes.map((feature) => (
              <TableCell align="right" key={feature}>
                {feature}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(data).map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.walletId}</TableCell>
              <TableCell align="right">&nbsp;${row.amount}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
