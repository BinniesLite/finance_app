import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Typography, Avatar } from '@mui/material';
import TransactionComponent from '../../Layout/AddTransactionComponent/Transaction';
import HistoryCard from '../../Layout/HistoryCard/HistoryCard';
import WalletCard from '../../Layout/WalletCard/WalletCard';
import './WalletsPage.css';

const WalletsPage = () => {
  const generateFakeData = (numberOfData) => {
    const fakeData = [];
    for (let i = 1; i <= numberOfData; i++) {
      fakeData.push({
        id: i,
        name: `Wallet ${i}`,
        amount: Math.floor(Math.random() * 1000) + 1,
      });
    }

    return fakeData;
  };

  const walletData = generateFakeData(20);
  const historyData = generateFakeData(3);

  return (
    <>
      <Row>
        <Col lg='3' className='d-none d-md-block'></Col>
        <Col xs='12' md='6' lg='9'>
          <div className='d-flex justify-content-between w-header'>
            <div className='d-flex align-items-center'>
              <Typography className='me-3' variant='h2'>
                Wallets
              </Typography>
              <AddCardIcon
                sx={{ width: '50px', height: '50px', color: 'yellow' }}
              ></AddCardIcon>
            </div>
            <Avatar
              src='./../../../assets/avatar-icon.png'
              sx={{ width: '50px', height: '50px' }}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ height: 'fit-content', padding: '30px' }}>
        <Col
          xs='12'
          md='6'
          lg='3'
          style={{
            background: 'rgba(255,255,255, 0.3)',
            borderRadius: '30px',
            height: 'fit-content',
            padding: '20px',
          }}
        >
          <div id='left-panel-content' style={{ marginTop: '15px' }}>
            <TransactionComponent />
            <div className='history-section-container'>
              <Typography
                variant='h5'
                sx={{
                  color: 'white',
                  fontFamily:
                    'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
                  fontSize: '30px',
                }}
              >
                History
              </Typography>
              <Button id='wallets-view-more-button'>View More</Button>
            </div>
            {historyData.map((wallet) => (
              <div style={{ marginTop: '20px' }} key={wallet.id}>
                <HistoryCard name={wallet.name} amount={wallet.amount} />
              </div>
            ))}
          </div>
        </Col>
        <Col
          xs='12'
          md='6'
          lg='9'
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '40px',
              flexWrap: 'wrap',
              borderRadius: '30px',
              marginLeft: '50px',
              padding: '10px',
              textAlign: 'left',
              background: 'rgba(255,255,255, 0.3)',
            }}
          >
            {walletData.map((wallet) => (
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '15px',
                  marginLeft: '25px',
                  marginRight: '20px',
                  textAlign: 'center',
                }}
                key={wallet.id}
              >
                <WalletCard name={wallet.name} amount={wallet.amount} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WalletsPage;
