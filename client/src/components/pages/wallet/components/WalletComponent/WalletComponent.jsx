import {
  Typography,
  Button,
} from "@mui/material";
import { Row, Col } from "reactstrap";
import WalletIcon from "@mui/icons-material/Wallet";
import * as React from "react";
import "./WalletComponent.css";
import HistoryCard from "@/components/layout/HistoryCard/HistoryCard";
import { Link } from "react-router-dom";
import { generateFakeTransactionData } from "@/utils/helper";

const WalletComponent = () => {
  const wallets = generateFakeTransactionData(10);
  console.log(wallets);
  return (
    <div className="input-field">
      <Row>
        <Col xs={7}>
          <Typography className="title" variant="h4">
            Add wallet
          </Typography>
        </Col>
        <Col xs={5}>
          <WalletIcon
            style={{ color: "yellow", height: 40, width: 40 }}
          ></WalletIcon>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          {wallets.slice(0, 3).map((wallet) => (
            <div class="his-card">
              <HistoryCard name={wallet.name} amount={wallet.amount} />
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Link to='/wallets'>
          <Button>See more</Button>
        </Link>
        
      </Row>
    </div>
  );
};

export default WalletComponent;
