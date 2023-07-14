import React from "react";
// components
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// form
import { useForm } from "react-hook-form";
// schema validation
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// api
import { postTransactions } from "../../utils/http-request";


const transactionSchema = z.object({
  amount: z.string(),
  type: z.enum(["income", "expense"]),
  wallet: z.string(),
  description: z.string(),
});

const TransactionAdd = ({ open, handleClose }) => {
  const [age, setAge] = React.useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmit = async (data) => {
    const {amount, type, wallet, description} = data;
    
    try {
      const response = await postTransactions({amount: parseFloat(amount), type, wallet, description});
      console.log("Response: ",response);
      handleClose();
    }
    catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  return (
    <Dialog open={open} handleClose={handleClose}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          <Typography variant="h5" color="primary.main">
            Add Transaction
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              {...register("amount")}
              type="number"
              fullWidth
              label="Amount"
              variant="standard"
              sx={{ py: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
                step: "any",
                pattern: "\\d*",
              }}
            />
            <p>{errors?.amount?.message}</p>
            <FormControl py={3} variant="standard" fullWidth>
              <Select {...register("type")}>
                <MenuItem value="income">
                  <Typography sx={{ color: "green" }} color="primary.success">
                    Income
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ color: "red" }} value="expense">
                  Expense
                </MenuItem>
              </Select>
              <p>{errors?.type?.message}</p>
            </FormControl>

            <FormControl fullWidth variant="standard" sx={{ py: 3 }}>
              <InputLabel id="">Wallets</InputLabel>
              <Select
                {...register("wallet")}
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={"income"}>Demo</MenuItem>
                <MenuItem value={"expense"}>Thingies</MenuItem>
                <MenuItem value={"stock"}>Demo2</MenuItem>
              </Select>
              <p>{errors?.wallet?.message}</p>
            </FormControl>
            <TextField
              {...register("description")}
              type="text"
              fullWidth
              label="Description"
              variant="standard"
              sx={{ py: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
                step: "any",
                pattern: "\\d*",
              }}
            />
            <Button onClick={handleClose}>Cancel</Button>
            <button type="submit">Add Transaction</button>
          </DialogContentText>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default TransactionAdd;
