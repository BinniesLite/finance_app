import { React, useState, useEffect } from 'react';
import WalletCard from '../wallet/components/WalletCard/WalletCard';
import 'reactjs-popup/dist/index.css';
import './WalletContent.css';

// api
import { getTransactions } from '../../../utils/http-request';
import { postTransactions } from '../../../utils/http-request';

const WalletsPage = ({ data }) => {
  const [walletData, setWalletData] = useState([]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '40px',
          flexWrap: 'wrap',
          borderRadius: '30px',
          marginLeft: '10px',
          padding: '10px',
          textAlign: 'left',
          background: 'rgba(255,255,255, 0.3)',
        }}
      >
        {Object.values(data).map((wallet) => (
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
            <WalletCard name={wallet.name} amount={wallet.amount} description={wallet.description}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default WalletsPage;
