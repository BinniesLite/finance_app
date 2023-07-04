// ORM - Object Relational Mapping
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const router = express.Router();

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
    
    const { amount, description, type, wallet } = req.body;
    const result = await prisma.transaction.create({
        data: {
            amount: amount,
            type: type
        }});
    
    res.status(201).json(result)
});

router.post("/update", async (req, res) => {
N
});


module.exports = router;