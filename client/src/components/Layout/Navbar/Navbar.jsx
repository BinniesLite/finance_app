import React, { useReducer } from 'react';

// components
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TransactionAdd from '../../general/TransactionAdd';
import AddWallet from '../AddWallet/AddWallet';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// icons
import { IconButton, Tooltip, Typography } from '@mui/material';
import { IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

// logo

const NavButton = ({ title, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton>{icon}</IconButton>
    </Tooltip>
  );
};

// create a useReducer for handling the state of the popup
// create a function that will handle the opening of the popup

const initialState = {
  openTransaction: false,
  openWallet: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'transaction':
      return { ...state, openTransaction: !state.openTransaction };
    case 'wallet':
      return { ...state, openWallet: !state.openWallet };
  }
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Stack
      mt={2}
      pr={{ xs: 1, md: 3 }}
      position='absolute'
      top={0}
      width='100%'
      direction='row'
      justifyContent='space-between'
    >
      <Stack px={4} pl={32} flexDirection='row' columnGap={2}></Stack>
      <Stack
        flexDirection='row'
        alignItems='center'
        visibility={{ xs: 'block', md: 'block' }}
        columnGap={1}
      >
        {/* Add Wallet button here */}
        {/* <Box>
          <Button
            onClick={() => dispatch({ type: 'wallet' })}
            size='small'
            variant='outlined'
            sx={{ borderRadius: '10px', backgroundColor: '#12131c' }}
          >
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>Add Wallet </Box>{' '}
            {' + '}
          </Button> */}
          {/* <Popup
            position={'top center'}
            // open={state.openWallet}
            // onClose={() => dispatch({ type: 'wallet' })}
            closeOnDocumentClick
            id='add-wallet-popup'
          > */}
          {/* <AddWallet
            open={state.openWallet}
            handleClose={() => dispatch({ type: 'wallet' })}
          /> */}
          {/* </Popup> */}
        {/* </Box> */}

        <Box>
          <Button
            onClick={() => dispatch({ type: 'wallet' })}
            size='small'
            variant='outlined'
            sx={{ borderRadius: '10px', backgroundColor: '#555597' }}
          >
            <Box sx={{ display: { xs: 'none', md: 'block', color:'white' } }}>
              Add Wallet
            </Box>
            {' + '}
          </Button>
          <AddWallet
            open={state.openWallet}
            handleClose={() => dispatch({ type: 'wallet' })}
          />
        </Box>

        <Box>
          <Button
            onClick={() => dispatch({ type: 'transaction' })}
            size='small'
            variant='outlined'
            sx={{ borderRadius: '10px', backgroundColor: '#555597' }}
          >
            <Box sx={{ display: { xs: 'none', md: 'block', color:'white' } }}>
              Add Transaction
            </Box>
            {' + '}
          </Button>
          <TransactionAdd
            open={state.openTransaction}
            handleClose={() => dispatch({ type: 'transaction' })}
          />
        </Box>

        <NavButton title='Profile' icon={<CgProfile size='1.2rem' />} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
