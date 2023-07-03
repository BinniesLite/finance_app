import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const TransactionAdd = ({ open, handleClose }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Dialog open={open} handleClose={handleClose}>
      <DialogTitle>
        <Typography variant="h5" color="primary.main">
            Add Transaction
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormControl fullWidth sx={{ }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              type="number"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth variant="standard" sx={{ py: 3 }}>
            <InputLabel id="">Type</InputLabel>
            <Select
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              
              <MenuItem value={"income"}>Income</MenuItem>
              <MenuItem value={"expense"}>Expense</MenuItem>
              <MenuItem value={"stock"}>Stock</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="standard" sx={{ py: 3 }}>
            <InputLabel id="">Wallets</InputLabel>
            <Select
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              
              <MenuItem value={"income"}>Demo</MenuItem>
              <MenuItem value={"expense"}>Thingies</MenuItem>
              <MenuItem value={"stock"}>Demo2</MenuItem>
            
            </Select>
          </FormControl>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button  onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TransactionAdd;
