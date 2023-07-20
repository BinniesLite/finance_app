const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const router = express.Router();

// filter all transactions
// endpoint: /api/filter/transaction
// note: this route is just for testing either the filter route is working or not.
router.get('/transaction', async (req, res) => {
    try {
        const transactions = await prisma.transaction.findMany();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
});


// filter by date range
// endpoint: /api/filter/transactions-by-date
// router example: /api/filter/transactions-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
router.get('/transactions-by-date', async (req, res) => {
    const start = req.query.start;
    const end = req.query.end;
    const startDate = start + 'T00:00:00.000Z'; // add time to the date to make it ISO format as required by prisma
    const endDate = end + 'T23:59:59.999Z'; // add time to the date to make it ISO format as required by prisma

    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate
            }
        }});
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
});

// filter by type expense/income
// endpoint: /api/filter/transaction/:type
// example: /api/filter/transaction/expense
router.get('/transaction/:type', async (req, res) => {
    const type = req.params.type;
    console.log(type);
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                type: type
            }
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
});

// filter by amount range
// endpoint: api/filter/transactions-by-amount
// note: this get request requires query parameters.
// example: /api/filter/transactions-by-amount?min=100&max=200
router.get('/transactions-by-amount', async (req, res) => {
    const min = parseFloat(req.query.min);
    const max = parseFloat(req.query.max);
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                amount: {
                    gte: min,
                    lte: max
                }
            }
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

