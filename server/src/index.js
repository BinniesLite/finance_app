const express = require('express');
const TransactionRouter = require("./router/transaction");
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

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
