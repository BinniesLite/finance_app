import * as React from 'react';
import { useState } from 'react';
import { Input, Label, FormGroup, FormText, Button } from 'reactstrap';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/AddWallet.css';

//This layout is in progress, I still struggle with the date range input
const AddWallet = () => {
  const addWalletStyle = {
    width: '310px',
    height: 'fit-content',
    padding: '15px',
    background: 'white',
  };

  const [dates, setDatesState] = useState({
    startDate: '',
    endDate: '',
  });

  const setDates = (e, { startDate, endDate }) => {
    setDatesState({
      startDate: startDate.format('YYYY-MM-DD'),
      endDate: endDate.format('YYYY-MM-DD'),
    });
  };

  return (
    <div style={addWalletStyle}>
      <p>Add wallet</p>
      <FormGroup>
        <div className='inline'>
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
        />
      </FormGroup>
      <FormGroup>
        <div className='inline'>
          <Label
            className='label-left'
            style={{ color: 'black' }}
            for='walletName'
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
        />
      </FormGroup>
      {/* <div id='date-range-container'> */}
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
        <DateRangePicker
          onApply={setDates}
          initialSettings={{ startDate: '08/20/2022', endDate: '08/28/2022' }}
        >
          <input
            type='text'
            value={dates.startDate + '-' + dates.endDate}
            className='form-control'
          />
        </DateRangePicker>

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['SingleInputDateRangeField']}>
            <DateRangePicker
              className='add-w-input'
              scrollable={false}
              slots={{ field: SingleInputDateRangeField }}
            />
          </DemoContainer>
        </LocalizationProvider> */}
      </div>
      {/* </div> */}
      <Button>Save Wallet</Button>
    </div>
  );
};

export default AddWallet;
