import {
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import { Row, Col } from "reactstrap";
import WalletIcon from "@mui/icons-material/Wallet";
import * as React from "react";
import "./WalletComponent.css";
import HistoryCard from "../HistoryCard/HistoryCard";
import { Link } from "react-router-dom";

const WalletComponent = () => {
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
  const wallets = generateFakeData(10);
  return (
    <div class="input-field">
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
