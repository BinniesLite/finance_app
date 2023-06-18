import {
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import * as React from "react";
import "./WalletComponent.css"
const WalletComponent = () => {
  return (
    <div class="input-field">
      <Typography className="title" variant="h4">
        Add wallet
      </Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Wallet name"
        style={{
          margin: 20,
          width: 250,
        }}
      />
      <br></br>
      <FormControl
        style={{
          margin: 20,
          width: 250,
        }}
      >
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
      </FormControl>
    </div>
  );
};

export default WalletComponent;
