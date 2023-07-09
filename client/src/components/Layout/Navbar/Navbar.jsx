import React, { useState } from 'react';
// components
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { IconButton, Tooltip } from '@mui/material';
import TransactionAdd from '../../general/TransactionAdd';
import AddWallet from '../AddWallet/AddWallet';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';

// icons
import { IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import AddCardIcon from '@mui/icons-material/AddCard';

// logo

const NavButton = ({ title, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton>{icon}</IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);

  const handleOpen = (component) => {
    if (component === 'transaction') {
      setOpenTransaction(true);
    } else if (component === 'wallet') {
      setOpenWallet(true);
    }
  };

  const handleClose = (component) => {
    component === 'transaction'
      ? setOpenTransaction(false)
      : setOpenWallet(false);
  };

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
      <Stack px={4} pl={32} flexDirection='row' columnGap={2}>
        {/* <Breadcrumbs>
          <Link>Wallets</Link>
          <Link>Portfolio</Link>
        </Breadcrumbs> */}
      </Stack>
      <Stack
        flexDirection='row'
        alignItems='center'
        visibility={{ xs: 'block', md: 'block' }}
        columnGap={1}
      >
        <Button
          onClick={() => handleOpen('transaction')}
          size='small'
          variant='outlined'
          sx={{ borderRadius: '10px' }}
        >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            Add Transaction{' '}
          </Box>{' '}
          {' + '}
        </Button>
        <TransactionAdd
          open={openTransaction}
          handleClose={() => handleClose('transaction')}
        />
        <Button
          onClick={() => handleOpen('wallet')}
          size='small'
          variant='outlined'
          sx={{ borderRadius: '10px' }}
        >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>Add Wallet </Box>{' '}
          {' + '}
        </Button>
        <Popup
          position={'top center'}
          open={openWallet}
          onClose={() => handleClose('wallet')}
          closeOnDocumentClick
          id='add-wallet-popup'
        >
          <AddWallet />
        </Popup>
        <NavButton
          title='Notifications'
          icon={<IoIosNotifications size='1.2rem' />}
        />
        <NavButton title='Profile' icon={<CgProfile size='1.2rem' />} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
