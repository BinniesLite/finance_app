import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';

// import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import "../../styles/Transaction.css"
import { alignProperty } from '@mui/material/styles/cssUtils';

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

const names = [
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Transaction = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Box className='Box' sx={{ height: '100vh', width: '100vh'}}>
           <div display="inline-block"><Typography>Transaction</Typography><ReceiptIcon></ReceiptIcon></div>
           
           <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel id="amountPlaceholder" htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput className='OutlinedInput'
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                />
            </FormControl>
                <br/>
            <FormControl fullWidth sx={{ m: 1 }}>
                <Select
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <em id="chooseWalletPlaceholder" color:gray>Wallet</em>;
                    }
        
                    return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                    <em>choose your wallet</em>
                    </MenuItem>
                    {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                    >
                        {name}
                    </MenuItem>
                    ))}
                </Select>
            
            </FormControl>
            


        </Box>
       
    );
}

export default Transaction