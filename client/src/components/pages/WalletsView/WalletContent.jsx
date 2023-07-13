import { React, useState, useEffect } from 'react';
import WalletCard from '../../Layout/WalletCard/WalletCard';
import 'reactjs-popup/dist/index.css';
import './WalletContent.css';

// api
import { getTransactions } from '../../../utils/http-request';
import { postTransactions } from '../../../utils/http-request';

const WalletsPage = () => {
  const [walletData, setWalletData] = useState([]);

  // CORS

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      console.log('Received transactions:', transactions);
      console.log('Type of transactions:', typeof transactions);
      setWalletData(transactions);
    };

    fetchTransactions();
  });

  const handlepostTransactions = async (transactionData) => {
    try {
      const newTransaction = await postTransactions(transactionData);
      setWalletData([...walletData, newTransaction]);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

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
        {Object.values(walletData).map((wallet) => (
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
    </>
  );
};

export default WalletsPage;
