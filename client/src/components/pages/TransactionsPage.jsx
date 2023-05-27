import { React, useState } from "react"
// import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
// import Button from '@mui/material/Button'
// import Grid from '@mui/material/Grid'
// import Item from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Root from '@mui/material/Divider'
import "../../styles/Transactions.css"
import Item from "@mui/material/ListItem"
import { Button, Card, TextField, CardActions, CardActionArea, CardMedia, CardContent, Typography, Container, Grid } from "@mui/material";

const TransactionPage = () => {
    return (
        <>
        <header>Wallets</header>
            <body>
                <div className="container">
                                <Grid container justify="space-around" spacing={2} style = {{
                                    paddingTop: 50,
                                }}>
                                    <Grid item xs={2}>
                                        <Button>Hello</Button>
                                    </Grid>
                                    <Grid item xs={10} style = {
                                            {
                                                backgroundColor: "grey",
                                                opacity: 0.6,
                                            }
                                        }>
                                        <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                                            {Array.from(Array(7)).map((_, index) => (
                                                <Grid item xs={2} sm={4} md={4} key={index} paddingBottom={3}>
                                                <Item>
                                                    <Card style = {
                                                        {
                                                            maxWidth: 320,
                                                        }
                                                    }>
                                                        <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image="https://deathbattlefanon.fandom.com/wiki/Doraemon?file=Doraemon_in_3D_CGI_Form.png"
                                                            alt="Doraemon"
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
                                                </Item>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                                
                                
                                
                              
                            {/* }
                        </Divider> */}
                </div>
            </body>
        </>
    );
};

export default TransactionPage;