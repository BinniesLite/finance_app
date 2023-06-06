import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { Input, Label, FormGroup, FormText } from 'reactstrap';
import './TransactionComponent.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const walletNames = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, walletName, theme) {
  return {
    fontWeight:
      walletName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const TransactionComponent = () => {
  const theme = useTheme();
  const [walletName, setwalletName] = React.useState('');

  const handleChange = (event) => {
    setwalletName(event.target.value);
  };

  return (
    <div className='transaction-card-container'>
      <div id='title-transaction'>
        <Typography>Transaction</Typography>
        <ReceiptIcon sx={{ width: '30px', height: '40px' }}></ReceiptIcon>
      </div>
      <FormControl
        fullWidth
        sx={{ height: '40px', width: '100%', marginBottom: '20px' }}
      >
        <InputLabel id='amountPlaceholder' htmlFor='outlined-adornment-amount'>
          Amount
        </InputLabel>
        <OutlinedInput
          className='OutlinedInput'
          id='outlined-adornment-amount'
          startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          label='Amount'
        />
      </FormControl>
      <FormControl fullWidth sx={{ height: '40px', width: '100%' }}>
        <Select
          displayEmpty
          value={walletName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <em id='chooseWalletPlaceholder' style={{ color: 'gray' }}>
                  Wallet
                </em>
              );
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value=''>
            <em>choose your wallet</em>
          </MenuItem>
          {walletNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, walletName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormGroup>
        <Label for='exampleFile' style={{ marginBottom: '-10px' }}>
          Upload your receipt
        </Label>
        <Input
          id='exampleFile'
          name='file'
          type='file'
          style={{ height: '40px', width: '100%' }}
        />
      </FormGroup>
      <button type='submit' id='transaction-submit-button'style={{ height: '40px', width: '50%' }}>
        Save
      </button>
    </div>
  );
};

export default TransactionComponent;
