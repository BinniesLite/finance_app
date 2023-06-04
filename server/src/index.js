const express = require('express');
const TransactionRouter = require("./router/transaction");

const app = express();
const PORT = 3000;

// Initialize database with Prisma


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use("/api/transaction", TransactionRouter)


app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
