const {PrismaClient} = require('@prisma/client')
const express = require('express')

const prisma = new PrismaClient()
const router = express.Router()

router.get('/total', async (req, res) => {
    
    try {
       
        const incomes = await prisma.transaction.findMany({
            where: {
                type: "income"
            }
        })
        
      
        // sum all the incomes
        let totalIncome = 0
        
        for (let i = 0; i < incomes.length; i++) {
            totalIncome += incomes[i].amount
        }

      
        res.json(totalIncome)

    }   
    catch (error) {
        console.log(error );
        res.json(error)
    }
})

module.exports = router