import React from 'react';
import { Row, Col } from 'reactstrap';
import Transaction from '../Layout/Transaction';
import HistoryCard from '../Layout/HistoryCard';
import WalletCard from '../Layout/WalletCard';
import '../../styles/WalletsPage.css';

const WalletsPage = () => {
  return (
    <Row>
      <Col xs='3'>
        <Transaction />
        <HistoryCard />
      </Col>
      <Col xs='9'>
        <WalletCard />
      </Col>
    </Row>
  );
};

export default WalletsPage;
