import React, { useEffect, useMemo } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// api
import { postTransactions, getWallets } from "../../utils/http-request";

const transactionSchema = z.object({
  amount: z.string(),
  type: z.enum(["income", "expense"]),
  wallet: z.string(),
  description: z.string(),
});

const TransactionAdd = ({ open, handleClose }) => {
  
  const [wallets, setWallets] = React.useState([]);
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  useEffect(() => {
    const fetchWallets = async () => {
      const wallets = await getWallets();
      setWallets(wallets);
    };
    fetchWallets();
  }, [wallets]);

  const onSubmit = async (data) => {
    const { amount, type, wallet } = data;
    handleClose();
    try {
      const response = await postTransactions({
        amount: parseFloat(amount),
        type,
        wallet,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          <Typography variant="h5" color="primary.main">
            Add Transaction
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl errors={errors.amount} sx={{ py: 3 }} fullWidth>
              <InputLabel>Amount</InputLabel>
              <TextField
                sx={{ pt: 4 }}
                {...register("amount")}
                type="number"
                fullWidth
                variant="standard"
                onBlur={(e) => {
                  const numericValue = e.target.value;
                  const formattedValue = numericValue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  });
                  e.target.value = formattedValue;
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  step: "any",
                  pattern: "\\d*",
                }}
              />
              <p>{errors?.amount?.message}</p>
            </FormControl>

            <FormControl
              sx={{ py: 2 }}
              error={errors.type}
              variant="standard"
              fullWidth
            >
              <InputLabel>Type</InputLabel>
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

            <FormControl
              error={errors.wallet}
              fullWidth
              variant="standard"
              sx={{ py: 3, maxHeight: "7rem", overflowY: "auto" }}
            >
              

              <InputLabel id="">Select Wallet</InputLabel>
              <Select
                {...register("wallet")}
               
                label="Select Wallet"
              >
                {wallets?.map((wallet) => (
                  <MenuItem key={wallet.id} value={wallet.id}>
                    {wallet.name}
                  </MenuItem>
                ))}
              </Select>
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
