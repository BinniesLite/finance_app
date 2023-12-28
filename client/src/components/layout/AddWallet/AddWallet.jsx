import { useEffect, useState, useContext } from 'react';
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
  FormLabel,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import Typography from '@mui/material/Typography';

//context
import AppContext from '@/context/app/context';
import { useAuthContext } from '../../../hooks/useAuthContext';

const walletSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const AddWallet = ({ open, handleClose }) => {
  const [wallets, setWallets] = useState([]);
  const appContext = useContext(AppContext);
  const { user } = useAuthContext();
  const { addWallet } = appContext;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(walletSchema),
  });

  // const onSubmit = async (data) => {
  //   const { name, description } = data;
  //   console.log('user in addwallte', user);
  //   handleClose();

  //   try {
  //     const response = await addWallet(data);

  //     setWallets([...wallets, response]);
  //     prisma.wallets.push(response);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onSubmit = async (data) => {
    const { name, description } = data;
    handleClose();

    try {
      const userId = user ? user.id : '';
      const response = await addWallet({
        name,
        description,
        userId: userId,
      });

      setWallets([...wallets, response]);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          <Typography
            variant='h5'
            sx={{ marginBottom: '10px', textAlign: 'center' }}
          >
            Add Wallet
          </Typography>
        </DialogTitle>
        <DialogContent>
          <FormControl sx={{ py: 3 }} fullWidth error={errors.name}>
            <FormLabel for='walletName'>Wallet Name</FormLabel>
            <TextField
              {...register('name')}
              type='text'
              placeholder='Name of the wallet'
              required
              fullWidth
            ></TextField>{' '}
            <p>{errors?.name?.message}</p>
          </FormControl>
          <FormControl sx={{ py: 2 }} fullWidth error={errors.description}>
            <FormLabel>Description</FormLabel>
            <TextField
              {...register('description')}
              type='text'
              placeholder='Description of the wallet'
              required
              fullWidth
            ></TextField>
            <p>{errors?.description?.message}</p>
          </FormControl>
          <button
            type='submit'
            style={{
              display: 'block',
              background: '#e0a4ed',
              textAlign: 'center',
              color: 'black',
            }}
          >
            Save Wallet
          </button>
          <Button onClick={handleClose} sx={{ marginTop: '30px' }}>
            Cancel
          </Button>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddWallet;
