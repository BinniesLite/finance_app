import { React, useState, useEffect } from 'react';
import WalletCard from '../WalletCard/WalletCard';
import 'reactjs-popup/dist/index.css';
import './WalletContent.css';

const WalletContent = ({ data }) => {
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
            <WalletCard name={wallet.name} id={wallet.id} date={wallet.date} description={wallet.description}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default WalletContent;
