import * as React from 'react';
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './HistoryCard.css';

const HistoryCard = ({name, amount}) => {
  const cardStyle = {
    height: 145, 
    borderRadius: 3
  }

  const buttonStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    padding: '2px 8px',
    gap: '-10px',
    textAlign: 'left',
    marginRight: '-15px',
    marginLeft: '0px',
    width: 'fit-content',
    height: '24px',
    border: 'none',
    background: 'none',
    color: 'black',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    fontWeight: 400,
    fontSize: '10px',
    fontFamily: 'Courier New, Courier, monospace'
  }

  return (
    <Card sx={cardStyle}>
      <div id='history-card-content'>
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            ${amount}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {name}
          </Typography>
        </CardContent>
        <Divider light variant='middle' />
        <CardActions>
          <Button style={buttonStyle} size='small'>Label •</Button>
          <Button style={buttonStyle} size='small'>Label</Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default HistoryCard;
