import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// components
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  FormGroup,
} from '@mui/material';
import Typography from '@mui/material/Typography';
// css
import './AddWallet.css';
// api
import { postWallets } from '../../../utils/http-request';

const walletSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const AddWallet = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(walletSchema),
  });

  const addWalletStyle = {
    width: '310px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  };

  const onSubmit = async (data) => {
    const { name, description } = data;

    try {
      const response = await postWallets({
        name,
        description,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl style={addWalletStyle} onSubmit={handleSubmit(onSubmit)}>
      <Typography>
        <h3>Add Wallet</h3>
      </Typography>
      <FormGroup>
          <InputLabel style={{ color: 'black' }} for='walletName'>
            Name
          </InputLabel>
        <TextField
          {...register('name')}
          type='text'
          placeholder='Name of the wallet'
          required
        />
      </FormGroup>
      <FormGroup>
          <InputLabel style={{ color: 'black' }} for='walletName'>
            Description
          </InputLabel>
        <TextField
          {...register('description')}
          type='text'
          placeholder='Description of the wallet'
          required
        />
      </FormGroup>
      <Button type='submit' id='add-w-save-b'>
        Save Wallet
      </Button>
    </FormControl>
  );
};

export default AddWallet;
