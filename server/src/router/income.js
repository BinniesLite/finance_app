const express = require('express')
const router = express.Router()

const {getIncome} = require('../controllers/income')

router.get('/total', getIncome)

module.exports = router