import { React, useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import AddCardIcon from '@mui/icons-material/AddCard';
import { Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import TransactionComponent from '../../Layout/AddTransactionComponent/Transaction';
import HistoryCard from '../../Layout/HistoryCard/HistoryCard';
import AddWallet from '../../Layout/AddWallet/AddWallet';
import WalletCard from '../../Layout/WalletCard/WalletCard';
import 'reactjs-popup/dist/index.css';
import './WalletsPage.css';

// api
import { getTransactions } from '../../../utils/http-request';

const WalletsPage = () => {
  const [open, setOpen] = useState(false);
  const [walletData, setWalletData] = useState([]);
  const closeModal = () => {
    setOpen(false);
    <Button>
      <i className='fa fa-check'></i>
    </Button>;
  };

  // CORS

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      setWalletData(transactions);
      // console.log(transactions);
    };

    fetchTransactions();
  }, []);

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
                cursor='pointer'
                onClick={() => setOpen((o) => !o)}
              ></AddCardIcon>
              <Popup
                position={'top center'}
                open={open}
                onClose={closeModal}
                closeOnDocumentClick
                id='add-wallet-popup'
              >
                <AddWallet />
              </Popup>
            </div>
            <Avatar
              src='./../../../assets/avatar-icon.png'
              sx={{ width: '60px', height: '60px' }}
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
            <div className='d-flex justify-content-between history-section-container'>
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
              <Link to='/transactions'>
                <Button id='wallets-view-more-button'>View More</Button>
              </Link>
            </div>
            {walletData.map((wallet) => (
              <div style={{ marginTop: '20px' }} key={wallet.id}>
                <HistoryCard name={wallet.name} amount={wallet.amount} />
              </div>
            ))}
          </div>
        </Col>
        <Col xs='12' md='6' lg='9'>
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
