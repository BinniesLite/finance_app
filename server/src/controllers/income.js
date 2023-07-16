const prisma = require('../prisma');

const getIncome = async (req, res) => {
    try {
        const incomes = await prisma.transation.findMany({
            where: {
                type: 'income'
            }
        })
        console.log(incomes);
        // sum all the incomes
        let totalIncome = 0
        incomes.forEach(income => {
            totalIncome += income.amount
        })

        console.log(totalIncome);

        res.json(totalIncome)

    }   
    catch (error) {
        res.json(error)
    }
}

module.exports = {getIncome}