const prisma = require('../db/prisma');


const getTransaction = async (req, res) => {
    try {
        const transactions = await prisma.transaction.findMany();
        res.json(transactions);
    }
    catch (error) {
        res.json(error);
    }
};

const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await prisma.transaction.findUnique({
            where: {
                id: id
            }
        });
        res.json(transaction);
    }
    catch (error) {
        res.json(error);
    }
};

const createTransaction = async (req, res) => {
    
        try {
        const { amount, description, type, walletId } = req.body;
       
        const result = await prisma.transaction.create({
            data: {
                amount: amount,
                description: description,
                type: type,
                walletId: walletId,
            }});
        
            res.status(201).json(result)
        }
        catch (error) {
            res.json(error);
        }

   
};



module.exports = {
    getTransaction, 
    getTransactionById,
    createTransaction
}