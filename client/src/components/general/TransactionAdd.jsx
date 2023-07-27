import React, { useEffect, useContext } from "react";
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
import { getWallets, getTransactions } from "@/utils/http-request";
import { formatTransactionList } from "../../utils/helper";
import AppContext from "@/context/app/context";
import { uploadImageToFirebase } from "../../utils/uploadImage";
import { formatDateToDateObject } from "../../utils/formatDate";


const transactionSchema = z.object({
  amount: z.string(),
  type: z.enum(["income", "expense"]),
  walletId: z.string(),
  description: z.string(),
  // image: z.string(),
});

const TransactionAdd = ({ open, handleClose }) => {
  const appContext = useContext(AppContext);
  const [wallets, setWallets] = React.useState([]);
  const [transaction, setTransaction] = React.useState([]);
  const [imageFile, setImageFile] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  //fetch wallets
  useEffect(() => {
    const fetchWallets = async () => {
      const response = await getWallets();
      setWallets(response);
    };
    fetchWallets();
  }, [wallets]);

  const onSubmit = async (data) => {
    const { amount, type, walletId, description } = data;
    var image = "";
    if(imageFile!=null){
      image = await uploadImageToFirebase(imageFile);
    }
    var createdAt = null;
    if (selectedDate!=null) {
      createdAt = formatDateToDateObject(selectedDate);
    }
    console.log(createdAt);
    handleClose();

    try {
      if (createdAt != null) {
        await appContext.addTransaction({
          amount: parseFloat(amount),
          type,
          walletId,
          description,
          image,
          createdAt,
        });
      }
      else {
        await appContext.addTransaction({
        amount: parseFloat(amount),
        type,
        walletId,
        description,
        image,
      });
      }
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
                type="text" // Change 'number' to 'text'
                fullWidth
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputMode: "decimal", // Specify input as a decimal number
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
              <Select {...register("walletId")} label="Select Wallet">
                {Object.values(wallets).map((wallet) => (
                  <MenuItem key={wallet.id} value={wallet.id}>
                    {wallet.name}
                  </MenuItem>
                ))}
              </Select>
              <p>{errors?.wallet?.message}</p>
            </FormControl>
            <FormControl
              error={errors.description}
              fullWidth
              variant="standard"
              sx={{ py: 3, maxHeight: "7rem", overflowY: "auto" }}
            >
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
            </FormControl>

            <FormControl
              error={errors.image}
              fullWidth
              variant="standard"
              sx={{ py: 3, maxHeight: "7rem", overflowY: "auto" }}
            >
              <Typography>Add Image</Typography>
              <input
                {...register("image")}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </FormControl>
            <FormControl fullWidth>
              {/* <InputLabel>Date</InputLabel> */}
              <TextField
                type="date"
                {...register("createdAt")}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </FormControl>

            <Button onClick={handleClose}>Cancel</Button>
            <button type="submit">Add Transaction</button>
          </DialogContentText>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default TransactionAdd;
