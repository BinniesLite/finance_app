import { useState } from 'react';
// form
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// components 
import { Input, Label, FormGroup, Button, Form } from 'reactstrap';
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
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(walletSchema),
  });

  const addWalletStyle = {
    width: '310px',
    height: 'fit-content',
    padding: '15px',
    background: 'white',
  justifyContent: 'center',
    margin: 'auto',
  };



  // const handleDateChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };

  // const formatRange = () => {
  //   if (startDate && endDate) {
  //     const formattedStartDate = startDate.format('MM/DD/YYYY');
  //     const formattedEndDate = endDate.format('MM/DD/YYYY');
  //     return `${formattedStartDate} - ${formattedEndDate}`;
  //   }
  //   return '';
  // };

  const onSubmit = async (data) => {
    const { name, description } = data;
    
    try {
      const response = await postWallets({
        name,
        description,
      });
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }


  };


  return (
    <Form style={addWalletStyle} onSubmit={handleSubmit(onSubmit)}>
      <Typography>
        <h3>Add Wallet</h3>
      </Typography>
      <FormGroup>
        <div className='d-flex align-items-center justify-content-flex-start'>
          <Label
            className='label-left'
            style={{ color: 'black' }}
            for='walletName'
          >
            Name
          </Label>
          <Label className='label-right' style={{ color: 'lightgrey' }}>
            Mandatory
          </Label>
        </div>

        <input
          {...register('name')}
          
          type='text'
         
          placeholder='Name of the wallet'
          required
        />
      </FormGroup>
      <FormGroup>
        <div className='d-flex align-items-center justify-content-flex-start'>
          <Label
            className='label-left'
            style={{ color: 'black' }}
            for='walletName'
          >
            Description
          </Label>
          <Label className='label-right' style={{ color: 'lightgrey' }}>
            Mandatory
          </Label>
        </div>

        <input
          {...register('description')}
          type='text'
          placeholder='Name of the wallet'
          required
        />
      </FormGroup>
      <Button type='submit' id='add-w-save-b'>
        Save Wallet
      </Button>
    </Form>
  );
};

export default AddWallet;
