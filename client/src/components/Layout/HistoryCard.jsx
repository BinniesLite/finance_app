import * as React from 'react';
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/HistoryCard.css';

const HistoryCard = () => {
  return (
    <Card sx={{ width: 290, height: 155, borderRadius: 3 }}>
      <div id='history-card-content'>
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            $XX.XXXX
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Wallet
          </Typography>
        </CardContent>
        <Divider light variant='middle' />
        <CardActions>
          <Button size='small'>Label •</Button>
          <Button size='small'>Label</Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default HistoryCard;
