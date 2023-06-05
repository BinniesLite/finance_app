import * as React from "react";
import {
  Button,
  Card,
  TextField,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";

const TransactionCard = ({ id, name, amount, date, type }) => {
  return (
    <Card
      style={{
        textAlign: "center",
        border: 0,
        borderRadius: 30,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Card
        style={{
          alignContents: "center",
          width: 250,
          height: 150,
          boxShadow: "none",
          borderRadius: 40,
          backgroundColor: "transparent",
        }}
      >
        <CardMedia
          sx={{ borderRadius: 10 }}
          image={"src/assets/wallet-card-image.jpg"}
          style={{
            width: 250,
            height: 150,
            display: "flex",
            position: "absolute",
            left: "45%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Card>

      <Card
        style={{
          height: 100,
          width: 275,
          border: 0,
          borderRadius: 30,
          display: "flex",
          position: "absolute",
          left: "45%",
          top: "80%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CardActionArea>
          <CardContent
            style={{
              backgroundColor: "white",
            }}
          >
            <Typography variant="h3" color="text.secondary">
              ${amount}
            </Typography>
            <Grid container columns={{ xs: 3, md: 5 }}>
              <Grid item xs={1.5}>
                <Typography gutterBottom variant="body2" component="div">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={1.75}>
                <Typography gutterBottom variant="body2" component="div">
                  {date}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography gutterBottom variant="body2" component="div">
                  {type}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Card>
  );
};

export default TransactionCard;
