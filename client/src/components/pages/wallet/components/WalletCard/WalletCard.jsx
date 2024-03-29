import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const WalletCard = ({ name, date, description }) => {
  // const [walletName, setWalletName] = useState('');

  const buttonStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',
    gap: '5px',
    marginLeft: '5px',
    width: 'fit-content',
    height: '24px',
    background: '#F6FFF6',
    color: '#158212',
    border: '1px solid #83E281',
    borderRadius: '12px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    fontWeight: 400,
    fontSize: '10px',
    fontFamily: 'Courier New, Courier, monospace',
  };

  return (
    <Card sx={{ width: 200, height: 242, borderRadius: 3 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={'src/assets/wallet-card-image.jpg'}
      />
      <CardContent sx={{ padding: '8px'}}>
        <Stack direction='column' justifyContent='space-between'>
          <Typography gutterBottom variant='h6' component='div'>
            {name}
          </Typography>
          <Typography
            display='block'
            style={{
              fontSize: '11px',
              justifyContent: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant='body2'
            color='text.secondary'
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>

      {/* category for wallet coming soon */}
      {/* <CardActions>
        <Button style={buttonStyle} size='small'>
          Label
        </Button>
        <Button style={buttonStyle} size='small'>
          Label
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default WalletCard;