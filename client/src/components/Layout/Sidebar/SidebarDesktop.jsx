import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { links } from '../../../constants/links';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';
import { AiOutlineCaretRight, AiOutlineMenu } from 'react-icons/ai';

const buckets = [
  {
    name: 'About us',
    color: '#FDD652',
  },
];

const Circle = ({ backgroundColor }) => {
  return (
    <span
      style={{
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
      }}
    />
  );
};

const Sidebar = ({
  activePage,
  handleActivePage,
  isMinimized,
  setIsMinimized,
}) => {

  const toggleIsMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Stack
      direction='column'
      rowGap={3}
      sx={{
        position: 'fixed',
        width: '15rem',
        height: '200vh',
        top: '0',
        color: 'gray ',
        zIndex: '10',
        backgroundColor: '#f5f6f7',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        transition: 'width 0.2s',
        minWidth: '50px',
        maxWidth: isMinimized ? '60px' : '15rem',
      }}
    >
      <Stack
        px={3}
        pt={2}
        pb={1}
        justifyContent={isMinimized ? 'center' : 'space-between'}
        flexDirection='row'
        alignItems='center'
      >
        {isMinimized ? null : (
          <Typography className='orange-gradient' variant='h3'>
            BLover
          </Typography>
        )}
        <IconButton onClick={toggleIsMinimized}>
          <AiOutlineMenu style={{ color: 'black' }} />
        </IconButton>
      </Stack>
      <Divider color='gray' />
      <Stack py={3} px={2} flexDirection='column' rowGap={1}>
        {links.map((link, index) => (
          <button
            onClick={() => handleActivePage(link.name)}
            style={{
              display: 'flex',
              flexDirection: isMinimized ? 'column' : 'row',
              alignItems: 'center',
              background: `${activePage === link.name ? 'black' : 'none'}`,
              cursor: 'pointer',
              padding: isMinimized ? '0' : 'none',
              justifyContent: isMinimized ? 'center' : 'flex-start',
            }}
            key={index}
          >
            <IconButton color='white'>{link.icon}</IconButton>
            {!isMinimized && (
              <Typography
                cursor='pointer'
                color='subtitle.main'
                variant='h7'
                key={index}
                sx={{ mx: 1 }}
              >
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              </Typography>
            )}
          </button>
        ))}
      </Stack>
      <Divider color='gray' />
      <Stack
        py={2}
        px={2}
        fontWeight='bold'
        justifyContent='center'
        flexDirection='column'
        rowGap={1}
      >
        {isMinimized ? (
          <Typography
            color='background.default'
            fontWeight='600'
            variant='h5'
          ></Typography>
        ) : (
          <Typography color='black' fontWeight='600' variant='h5'>
            Auth Pages
          </Typography>
        )}
        {buckets.map((bucket, index) => (
          <Stack
            key={index}
            justifyContent={isMinimized ? 'center' : 'space-between'}
            flexDirection='row'
            alignItems='center'
            rowGap={1}
          >
            <button
              style={{
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: '',
                border: 'none',
              }}
            >
              <Circle backgroundColor={bucket.color} />
              {!isMinimized && (
                <Typography sx={{ ml: 1 }} color='subtitle.main' variant='h7'>
                  {bucket.name}
                </Typography>
              )}
            </button>
            {!isMinimized && (
              <IconButton>
                <AiOutlineCaretRight size='1rem' style={{ color: '#948B93' }} />
              </IconButton>
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
