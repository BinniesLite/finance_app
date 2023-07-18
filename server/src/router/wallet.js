// ORM - Object Relational Mapping
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const router = express.Router();

// get all wallets
//endpoint: /api/wallet
router.get('/', async (req, res) => {
    try {
        const wallets = await prisma.wallet.findMany();
        res.status(200).json(wallets);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get wallet by id
// endpoint: /api/wallet/:id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const wallet = await prisma.wallet.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json(error);
    }
});

// create wallet
// endpoint: /api/wallet/create
router.post("/create", async (req, res) => {
    const name = req.body.name;
    try {
        const result = await prisma.wallet.create({
            data: {
                name: name
            }
        });
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all transactions by wallet id
// endpoint: /api/transaction/wallet/:id


// delete wallet
// endpoint: /api/wallet/delete/:id
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await prisma.wallet.delete({
            where: {
                id: id
            }
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// name change
// endpoint: /api/wallet/name/:id
router.put('/name/:id', async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    try {
        const result = await prisma.wallet.update({
            where: {
                id: id
            },
            data: {
                name: name
            }
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
