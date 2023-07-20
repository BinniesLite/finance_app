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
// endpoint: /api/filter/transaction/date
// note: this get request requires query parameters.
// router example: /api/filter/transaction/date?start=2023-07-17T02:50:53.765Z&end=2023-07-18T02:50:53.765Z
// date format: YYYY-MM-DD
// =>>> still debugging
router.get('/transaction/date', async (req, res) => {
    const startDate = req.query.startDate; // eg. req.query.startDate = 2021-01-01
    const endDate = req.query.endDate; // eg. req.query.endDate = 2021-01-31
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                AND: 
                [
                    { createdAt: { gte: startDate } },
                    { createdAt: { lte: endDate } }
                ]
            }
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
});

// filter by type expense/income
// endpoint: /api/filter/transaction
router.get('/transaction/:type', async (req, res) => {
    const type = req.params.type;
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
// endpoint: /api/filter/transaction/amount
// note: this get request requires query parameters.
// example: /api/filter/transaction/amount?min=100&max=1000
router.get('/transaction/amount', async (req, res) => {
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

