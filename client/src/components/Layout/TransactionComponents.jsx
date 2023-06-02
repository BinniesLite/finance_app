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
        height: 200,
        width: 320,
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 100 }}
          image={"src/assets/wallet-card-image.jpg"}
        />
        <CardContent
          style={{
            backgroundColor: "white",
          }}
        >
          <Typography variant="h3" color="text.secondary">
            ${amount}
          </Typography>
          {/* <Col> */}
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

          {/* <Typography variant="body2" color="black">
            {date}
          </Typography>
          <Typography variant="body2" color="black">
            {type}
          </Typography> */}
          {/* </Col> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default TransactionCard;
