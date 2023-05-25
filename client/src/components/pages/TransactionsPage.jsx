import { React, useState } from "react"
// import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
// import Button from '@mui/material/Button'
// import Grid from '@mui/material/Grid'
// import Item from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Root from '@mui/material/Divider'
import "../../styles/Transactions.css"
import { Button, TextField } from "@mui/material";

const TransactionPage = () => {
    return (
        <>
            <header>Transactions</header>
            <body>
                <div>
                        <Divider>CENTER</Divider>
                        <Divider textAlign="left">LEFT</Divider>
                        <Divider textAlign="right">RIGHT</Divider>
                </div>
            </body>
        </>
    );
};

export default TransactionPage;