const prisma = require('../db/prisma');

const getIncome = async (req, res) => {
    try {
        const incomes = await prisma.transaction.findMany({
            where: {
                type: 'income'
            }
        })

        let totalIncome = 0
        incomes.forEach(income => {
            totalIncome += income.amount
        })

        res.json(totalIncome)
    }   
    catch (error) {
        res.json(error)
    }
}

module.exports = {getIncome}