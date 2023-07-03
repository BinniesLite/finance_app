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
        res.status(200).json(transactions);
    }
    catch (error) {
        res.status(400).json(error);    
    }
});

// get transaction by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(transaction);
    }
    catch (error) {
        res.status(400).json(error);
    }
});


// create transaction
router.post("/create", async (req, res) => {
    const { amount, description, wallId } = req.body;
    const transactionID = {id: uuidv4()};
    const result = await prisma.transaction.create({
        data: {
            id: transactionID,
            amount: amount,
            description: description,
            wallet: {
                connect: {
                    id: wallId
                }
            }
        }
    });
    
    res.status(201).json(result)
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { amount, description } = req.body;
    try {
        const transaction = await prisma.transaction.update({
            where: {
                id: id
            },
            data: {
                amount: amount,
                description: description
            }
        });
        res.status(200).json(transaction);
    }
    catch (error) {
        res.status(400).json(error);
    }
});


router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await prisma.transaction.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(transaction);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
    

module.exports = router;