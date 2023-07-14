
const {PrismaClient} = require('@prisma/client')
const express = require('express')

const prisma = new PrismaClient()
const router = express.Router()

router.get('/total', async (req, res) => {
    try {
        const incomes = await prisma.transation.findMany({
            where: {
                type: 'income'
            }
        })
        // sum all the incomes
        let totalIncome = 0
        incomes.forEach(income => {
            totalIncome += income.amount
        })

        res.json(totalIncome)

    }   
    catch (error) {
        res.json(error)
    }
})

