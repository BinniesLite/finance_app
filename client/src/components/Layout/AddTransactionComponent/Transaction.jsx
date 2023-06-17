import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { Input, Label, FormGroup, Button } from 'reactstrap';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../../config/firebaseConfig';
import './TransactionComponent.css';

// api
import { getWallets } from '../../../utils/http-request';

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

function getStyles(name, selectedName, theme) {
  return {
    fontWeight:
      name === selectedName
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

const TransactionComponent = ({ onCreateTransaction }) => {
  const theme = useTheme();
  const [amount, setAmount] = React.useState('');
  const [walletName, setWalletName] = React.useState('');
  const [file, setFile] = React.useState(null);
  const fileInputRef = React.useRef(null); // Create a ref for the file input element
  const [wallets, setWallets] = React.useState([]);

  // hardcoded wallets
  React.useEffect(() => {
    const fetchWallets = async () => {
      const wallet = await getWallets();
      setWallets(...wallets, wallet);
    };

    fetchWallets();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !walletName || file == null) {
      alert('Please fill out all the fields');
      return;
    }

    // Upload the file and metadata to Firebase Storage
    const fileRef = ref(storage, `receipts/${file.name + v4()}`);
    await uploadBytes(fileRef, file).then(() => {
      alert('Uploaded successfully!');
    });

    try {
      const transactionData = {
        amount: parseFloat(amount),
        walletName,
        file,
      };

      onCreateTransaction(transactionData);

      setAmount('');
      setWalletName('');
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <FormGroup onSubmit={onSubmit} className='transaction-card-container'>
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ height: '40px', width: '100%' }}>
        <Select
          displayEmpty
          value={walletName}
          onChange={(e) => setWalletName(e.target.value)}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected === '') {
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
          {wallets.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, walletName, theme)}
              component='div'
            >
              <Typography variant='inherit'>{name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormGroup>
        <Label htmlFor='exampleFile' style={{ marginBottom: '-10px' }}>
          Upload your receipt
        </Label>
        <Input
          id='exampleFile'
          name='file'
          type='file'
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
          style={{ height: '40px', width: '100%' }}
        />
      </FormGroup>
      <Button
        type='submit'
        id='transaction-submit-button'
        style={{ height: '40px', width: '50%' }}
        onClick={onSubmit}
      >
        Save
      </Button>
    </FormGroup>
  );
};

TransactionComponent.propTypes = {
  onCreateTransaction: PropTypes.func.isRequired,
};

export default TransactionComponent;
