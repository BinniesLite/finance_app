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
import axios from "axios";
import "./TransactionCard.css";

const TransactionCard = ({ id, name, amount, date, type, image }) => {
  if (image == "" || image == null) {
    image =
      "https://firebasestorage.googleapis.com/v0/b/bunny-lovers-d8ce3.appspot.com/o/%E2%80%94Pngtree%E2%80%94vector%20receipt%20icon_4192327.png?alt=media&token=b5aeec93-3f0f-409d-9209-cf57746489a8";
  }
  return (
    <Card className="card-group">
      <Card className="full-card">
        <CardMedia
          className="card-media"
          sx={{ borderRadius: 10 }}
          image={image}
        />
      </Card>

      <Card className="card-content" sx={{ borderRadius: 10 }}>
        <CardActionArea>
          <CardContent>
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
