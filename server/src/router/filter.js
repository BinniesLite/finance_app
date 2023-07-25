const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");

const {
    filterByDate,
    filterByType,
    filterByAmount
} = require("../controllers/filter");

// filter by date range
// endpoint: /api/filter/transactions-by-date
// router example: /api/filter/transactions-by-date?start=2023-07-17&end=2023-07-18
// note: this get request requires query parameters.
// date format: YYYY-MM-DD
// router.get("/transactions-by-date", validate(filterDateSchema), filterByDate);
router.get("/transactions-by-date", filterByDate);


// filter by type expense/income
// endpoint: /api/filter/transaction/:type
// example: /api/filter/transaction/expense
router.get("/transaction/:type", filterByType);

// filter by amount range
// endpoint: api/filter/transactions-by-amount
// note: this get request requires query parameters.
// example: /api/filter/transactions-by-amount?min=100&max=200
// router.get("/transactions-by-amount", validate(filterAmountSchema), filterByAmount);
router.get("/transactions-by-amount", filterByAmount);

module.exports = router;