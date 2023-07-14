const express = require('express');

// router
const TransactionRouter = require("./router/transaction");
const WalletRouter = require("./router/wallet");
const IncomeRouter = require("./router/income");

const cors = require('cors');
const app = express();

const PORT = 3000;

// Initialize database with Prisma
app.get('/', (req, res) => {
    res.send('Hello World!');
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
app.use("/api/income", IncomeRouter)

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
