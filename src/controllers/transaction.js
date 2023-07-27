const prisma = require('../db/prisma');

/*
    GET /api/transaction
*/
// get all transactions
// endpoint: /api/transaction
const getTransaction = async (req, res) => {
    try {
        const transactions = await prisma.transaction.findMany();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
};

// get transaction by id
// endpoint: /api/transaction/:id
const getTransactionById = async (req, res) => {
    const id = req.params.id;
    try {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json(error);
    }
};


// get all transactions by wallet id
// endpoint: /api/transaction/wallet/:id
const getTransactionByWalletId = async (req, res) => {
    const id = req.params.id;
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                walletId: id
            }
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
};

// create transaction
// endpoint: /api/transaction/create
const createTransaction = async (req, res) => {
    const { amount, description, type, walletId, createdAt, image } = req.body;
    try {
        const result = await prisma.transaction.create({
            data: {
                amount: amount,
                description: description,
                type: type,
                walletId: walletId,
                createdAt: createdAt,
                image: image,
            }
        });
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json(error);
    }
};

// delete transaction
// endpoint: /api/transaction/delete/:id
const deleteTransaction = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await prisma.transaction.delete({
            where: {
                id: id
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

// update transaction
// endpoint: /api/transaction/update/:id
const updateTransaction = async (req, res) => {
    const id = req.params.id;
    const { amount, description, type, walletId } = req.body;
    try {
        const result = await prisma.transaction.update({
            where: {
                id: id
            },
            data: {
                amount: amount,
                description: description,
                type: type,
                walletId: walletId
            }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getTransaction, 
    getTransactionById,
    getTransactionByWalletId,
    createTransaction,
    deleteTransaction,
    updateTransaction
}