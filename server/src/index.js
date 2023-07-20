const express = require('express');

// router
const TransactionRouter = require("./router/transaction");
const WalletRouter = require("./router/wallet");
const FilterRouter = require("./router/filter");
const CalculationRouter = require("./router/calculation");

const cors = require('cors');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// Cors configuration
let corsOptions = {
    origin: "http://localhost:80"
};

cors(corsOptions);

app.use(express.json());
app.use(cors());

app.use("/api/transaction", TransactionRouter)
app.use("/api/wallet", WalletRouter)
app.use("/api/filter", FilterRouter)
app.use("/api/calculation", CalculationRouter)

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
