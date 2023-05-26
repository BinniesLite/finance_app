import { React, useState } from "react"
// import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
// import Button from '@mui/material/Button'
// import Grid from '@mui/material/Grid'
// import Item from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Root from '@mui/material/Divider'
import "../../styles/Transactions.css"
import { Button, Card, TextField, CardActions, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const TransactionPage = () => {
    return (
        <>
            <body>
                <div>
                        <Divider>
                            {
                                <h1>Wallets</h1>
                            }
                        </Divider>
                        <Divider textAlign="left">
                            {
                                <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                  <CardMedia
                                    component="img"
                                    height="140"
                                    image="../assets/IMG_5187.PNG"
                                    alt="green iguana"
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      Lizards are a widespread group of squamate reptiles, with over 6,000
                                      species, ranging across all continents except Antarctica
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                                <CardActions>
                                  <Button size="small" color="primary">
                                    Share
                                  </Button>
                                </CardActions>
                              </Card>
                            }
                        </Divider>
                        <Divider textAlign="right">RIGHT</Divider>
                </div>
            </body>
        </>
    );
};

export default TransactionPage;