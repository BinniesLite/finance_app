import React, { useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import './EditWalletCard.css';

const EditWalletCard = () => {
  const editWalletStyles = {
    background: 'white',
    width: '310px',
    height: 'fit-content',
    padding: '15px',
  };

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

    const newWallet = {
      name: walletName,
      amount: walletAmount,
      friends: walletFriends,
      dateRange: formatRange(),
    };

    console.log(newWallet);
  };

  return (
    <div className='edit-wallet-card' style={{ editWalletStyles }}>
      <div className='edit-wallet-card-header'>
        <h5 className='edit-wallet-card-title'>Wallet Name</h5>
        <h6 className='edit-wallet-card-amount'>Wallet Amount</h6>
      </div>
      <FormGroup onSubmit={onSubmit}>
        <Label style={{ color: 'black' }} for='daterange'>
          Date Range
        </Label>
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
      </FormGroup>
    </div>
  );
};

export default EditWalletCard;
