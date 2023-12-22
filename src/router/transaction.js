const express = require("express");
const validate = require("../middleware/validate");
const transactionSchema = require("../validations/transaction.validation");

const {
    getTransaction, 
    getTransactionById,
    getTransactionByWalletId,
    createTransaction,
    deleteTransaction,
    updateTransaction
} = require("../controllers/transaction");


const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

// get all transactions
// endpoint: /api/transaction
router.get("/", getTransaction);

// get transaction by id
// endpoint: /api/transaction/:id
router.get("/:id", getTransactionById);

// get all transactions by wallet id
// endpoint: /api/transaction/wallet/:id
router.get("/wallet/:id", getTransactionByWalletId);

// create transaction
// endpoint: /api/transaction/create
router.post("/create", validate(transactionSchema), createTransaction);

// delete transaction
// endpoint: /api/transaction/delete/:id
router.delete("/delete/:id", deleteTransaction);

// update transaction
// endpoint: /api/transaction/update/:id
router.put("/update/:id", validate(transactionSchema), updateTransaction);

module.exports = router;
