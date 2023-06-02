const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');

const router = express.Router();


// get all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await prisma.transaction.findMany();
        res.json(transactions);
    }
    catch (error) {
        res.json(error);    
    }
});

// get transaction by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const transaction = await prisma.transaction.findUnique({
        where: {
            id: id
        }
    });
    res.json(transaction);
});

router.post("/create", async (req, res) => {
    console.log(req.body);
    const { amount, description, date, category } = req.body;
    const result = await prisma.transaction.create({
        data: {
            amount: amount,
            description: description,
        }});
    
    res.status(201).json(result)
   

});

router.post("/update", async (req, res) => {
    const { id, amount, description, date, category } = req.body;
    const result = await prisma.transaction.update({
        where: {
            id: id
        },
        data: {
            amount: amount,
            description: description,

            // convert date string to Date object
            date: new Date(date),
            category: category
        }
    });
    res.json(result);
});




module.exports = router;