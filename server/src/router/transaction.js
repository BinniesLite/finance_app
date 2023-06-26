// ORM - Object Relational Mapping
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Express router setup
const express = require('express');
const router = express.Router();

// create ID
const { v4: uuidv4 } = require('uuid');

// M-V-C
// Model - View - Controller

// get all transactions

// fetch request
// async/await 
// promise

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
    const { amount, description, } = req.body;
    const transactionID = {id: uuidv4()};
    const result = await prisma.transaction.create({
        data: {
            id: transactionID,
            amount: amount,
            description: description,
        }});
    
    res.status(201).json(result)
});

router.post("/update", async (req, res) => {
    const { id, amount, description } = req.body;
    const result = await prisma.transaction.update({
        where: {
            id: id
        },
        data: {
            amount: amount,
            description: description,
        }
    });
    res.json(result);
});


module.exports = router;