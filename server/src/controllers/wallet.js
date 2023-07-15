const prisma = require('../prisma');

const getTransactionByWalletId = async (req, res) => {
    const { id } = req.params;
    
    const transactions = await prisma.transaction.findMany({
        where: {
            walletId: id
        }
    });
    console.log(transactions)

    res.status(201).json(transactions);
}

module.exports = {getTransactionByWalletId}