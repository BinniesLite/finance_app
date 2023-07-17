// import { useState } from 'react';
// // form
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// // components
// import {
//   Button,
//   FormControl,
//   InputLabel,
//   TextField,
//   FormGroup,
// } from '@mui/material';
// import Typography from '@mui/material/Typography';
// // css
// import './AddWallet.css';
// // api
// import { postWallets } from '../../../utils/http-request';

// const walletSchema = z.object({
//   name: z.string(),
//   description: z.string(),
// });

// const AddWallet = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(walletSchema),
//   });

//   const addWalletStyle = {
//     width: '310px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     margin: 'auto',
//   };

//   const onSubmit = async (data) => {
//     const { name, description } = data;

//     try {
//       const response = await postWallets({
//         name,
//         description,
//       });
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <FormControl style={addWalletStyle} onSubmit={handleSubmit(onSubmit)}>
//       <Typography>
//         <h3>Add Wallet</h3>
//       </Typography>
//         <InputLabel style={{ color: 'black' }} for='walletName'>
//           Name
//         </InputLabel>
//         <TextField
//           {...register('name')}
//           type='text'
//           placeholder='Name of the wallet'
//           required
//         />
//         <InputLabel style={{ color: 'black' }} for='walletName'>
//           Description
//         </InputLabel>
//         <TextField
//           {...register('description')}
//           type='text'
//           placeholder='Description of the wallet'
//           required
//         />
//       {/* <FormGroup></FormGroup> */}
//       <Button type='submit'>
//         Save Wallet
//       </Button>
//     </FormControl>
//   );
// };

// export default AddWallet;

import React, { useEffect, useContext, useMemo } from 'react';
// components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// form
import { set, useForm } from 'react-hook-form';
// schema validation
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// api
// import { postTransactions, getWallets } from "../../utils/http-request";
import AppContext from '../../../context/app/context';

const transactionSchema = z.object({
  amount: z.string(),
  type: z.enum(['income', 'expense']),
  walletId: z.string(),
  description: z.string(),
});

const AddWallet = ({ open, handleClose }) => {
  const appContext = useContext(AppContext);
  const [wallets, setWallets] = React.useState([]);
  const [transaction, setTransaction] = React.useState([]);

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
      await appContext.getWallets();
      setWallets(appContext.wallets);
    };
    fetchWallets();
  }, [wallets]);

  //fetch transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await appContext.getTransactions();
      setTransaction(...transaction, transactions);
    };
    fetchTransactions();
  }, [transaction]);

  const onSubmit = async (data) => {
    const { amount, type, walletId, description } = data;
    handleClose();

    try {
      const response = await appContext.addTransaction({
        amount: parseFloat(amount),
        type,
        walletId,
        description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          <Typography variant='h5' color='primary.main'>
            Add Wallet
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl errors={errors.amount} sx={{ py: 3 }} fullWidth>
              <InputLabel>Amount</InputLabel>
              <TextField
                sx={{ pt: 4 }}
                {...register('amount')}
                type='number'
                fullWidth
                variant='standard'
                onBlur={(e) => {
                  const numericValue = e.target.value;
                  const formattedValue = numericValue.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  });
                  e.target.value = formattedValue;
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>$</InputAdornment>
                  ),
                  step: 'any',
                  pattern: '\\d*',
                }}
              />
              <p>{errors?.amount?.message}</p>
            </FormControl>

            <FormControl
              sx={{ py: 2 }}
              error={errors.type}
              variant='standard'
              fullWidth
            >
              <p>{errors?.type?.message}</p>
            </FormControl>
            <FormControl
              error={errors.wallet}
              fullWidth
              variant='standard'
              sx={{ py: 3, maxHeight: '7rem', overflowY: 'auto' }}
            >
              <p>{errors?.wallet?.message}</p>
            </FormControl>
            <TextField
              {...register('description')}
              type='text'
              fullWidth
              label='Description'
              variant='standard'
              sx={{ py: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'></InputAdornment>
                ),
                step: 'any',
                pattern: '\\d*',
              }}
            />
            <Button onClick={handleClose}>Cancel</Button>
            <button type='submit'>Add Wallet</button>
          </DialogContentText>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddWallet;
