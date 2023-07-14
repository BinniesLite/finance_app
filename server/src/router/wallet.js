const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    
    try {
        const wallets = await prisma.wallet.findMany();   
        res.json(wallets)

    }
    catch (error) {
        res.json(error);    
    }
})

// get wallet by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const wallet = await prisma.wallet.findUnique({
        where: {
            id: id
        }
    });
    res.json(wallet);
});

router.post("/create", async (req, res) => {
        const { name } = req.body;
        const result = await prisma.wallet.create({
            data: {
                name: name,
            }
        });

        res.status(201).json(result)
    }
);




// query transaction by wallet id
router.get('/:id/transactions', async (req, res) => {
    const { id } = req.params;

    const transactions = await prisma.transaction.findMany({
        where: {
            walletId: id
        }
    });

    res.status(201).json(transactions);
});


module.exports = router;
