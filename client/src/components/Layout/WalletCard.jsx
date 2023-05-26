import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/WalletCard.css';

const WalletCard = () => {
  const [walletName, setWalletName] = useState('');

  return (
    <Card sx={{ width: 240, height: 282, borderRadius: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={'src/assets/wallet-card-image.jpg'}
        title={walletName}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Wallet Name
        </Typography>
        <div id='wallet-card-div'>
          <Typography variant='body2' color='text.secondary'>
            $15.00
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            MM-DD-YYYY
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size='small'>Label</Button>
        <Button size='small'>Label</Button>
      </CardActions>
    </Card>
  );
};

export default WalletCard;
