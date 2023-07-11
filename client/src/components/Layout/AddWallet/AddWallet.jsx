import React, { useState } from 'react';
import { Input, Label, FormGroup, Button, Form } from 'reactstrap';
import './AddWallet.css';

const AddWallet = ({ onCreateWallet }) => {
  const addWalletStyle = {
    width: '310px',
    height: 'fit-content',
    padding: '15px',
    background: 'white',
    justifyContent: 'center',
    margin: 'auto',
  };

  const [walletName, setWalletName] = useState('');
  const [walletAmount, setWalletAmount] = useState(0);
  const [walletFriends, setWalletFriends] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const formatRange = () => {
    if (startDate && endDate) {
      const formattedStartDate = startDate.format('MM/DD/YYYY');
      const formattedEndDate = endDate.format('MM/DD/YYYY');
      return `${formattedStartDate} - ${formattedEndDate}`;
    }
    return '';
  };

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      const newWallet = {
        name: walletName,
        amount: walletAmount,
        friends: walletFriends,
        dateRange: formatRange(),
      };

      onCreateWallet(walletData);

      setAmount('');
      setWalletName([]);
      setWalletFriends([]);
      setStartDate(null);
      setEndDate(null);

      // if (fileInputRef.current) {
      //   fileInputRef.current.value = null;
      // }
    } catch (error) {
      console.error('Error creating wallet:', error);
    }
  };

  return (
    <Form style={addWalletStyle} onSubmit={onSubmit}>
      <p>Add wallet</p>
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
        <Input
          className='add-w-input'
          type='name'
          name='name'
          placeholder='Name of the wallet'
          value={walletName}
          onChange={(e) => setWalletName(e.target.value)}
          onSubmit={onSubmit}
          required
        />
      </FormGroup>
      <FormGroup>
        <div className='inline'>
          <Label
            className='label-left'
            style={{ color: 'black' }}
            for='walletName'
          >
            Amount
          </Label>
          <Label className='label-right' style={{ color: 'lightgrey' }}>
            Mandatory
          </Label>
        </div>
        <Input
          className='add-w-input'
          type='amount'
          name='amount'
          placeholder='$XX.XX'
          value={walletAmount}
          onChange={(e) => setWalletAmount(e.target.value)}
          onSubmit={onSubmit}
          required
        />
      </FormGroup>
      <FormGroup>
        <div className='inline'>
          <Label
            className='label-left'
            style={{ color: 'black' }}
            for='friends'
          >
            Friends
          </Label>
          <Label className='label-right' style={{ color: 'lightgrey' }}>
            Optional
          </Label>
        </div>
        <Input
          className='add-w-input'
          type='name'
          name='name'
          placeholder='@username'
          value={walletFriends}
          onChange={(e) => setWalletFriends(e.target.value)}
        />
      </FormGroup>
      <div className='inline'>
        <Label
          className='label-left'
          style={{ color: 'black' }}
          for='daterange'
        >
          Date Range
        </Label>
        <Label className='label-right' style={{ color: 'lightgrey' }}>
          Optional
        </Label>
      </div>
      <div className='date-range-picker-container'>
        <Input
          type='date'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span style={{ fontSize: '14px' }}> to </span>
        <Input
          type='date'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <Button type='button' id='add-w-save-b' onSubmit={onSubmit}>
        Save Wallet
      </Button>
    </Form>
  );
};

export default AddWallet;
