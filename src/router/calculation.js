const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
const validate = require("../middleware/validate");

const {
    calculateTotalIncome,
    calculateTotalExpense,
    calculateTotalBalance,
    calculateTotalIncomeByWalletId,
    calculateTotalExpenseByWalletId,
    calculateTotalBalanceByWalletId,
    calculateTotalIncomeByDate,
    calculateTotalExpenseByDate,
    calculateTotalBalanceByDate
} = require("../controllers/calculation");

// calculate total income
// endpoint: /api/calculation/total-income
router.get("/total-income", calculateTotalIncome);

// calculate total expense
// endpoint: /api/calculation/total-expense
router.get("/total-expense", calculateTotalExpense);

// calculate total balance
// endpoint: /api/calculation/balance
router.get("/balance", calculateTotalBalance);


// calculate total income by wallet id
// endpoint: /api/calculation/total-income-by-walletid/:id
router.get("/total-income-by-walletid/:id", calculateTotalIncomeByWalletId);

// calculate total expense by wallet id
// endpoint: /api/calculation/total-expense-by-walletid/:id
router.get("/total-expense-by-walletid/:id", calculateTotalExpenseByWalletId);

// calculate total balance by wallet id
// endpoint: /api/calculation/balance-by-walletid/:id
router.get("/balance-by-walletid/:id", calculateTotalBalanceByWalletId);


// calculate total income by date range
// endpoint: /api/calculation/total-income-by-date
// router example: /api/calculation/total-income-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
router.get("/total-income-by-date", calculateTotalIncomeByDate);

// calculate total expense by date range
// endpoint: /api/calculation/total-expense-by-date
// router example: /api/calculation/total-expense-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
router.get("/total-expense-by-date", calculateTotalExpenseByDate);

// calculate total balance by date range
// endpoint: /api/calculation/balance-by-date
// router example: /api/calculation/balance-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
router.get("/balance-by-date", calculateTotalBalanceByDate);


module.exports = router;