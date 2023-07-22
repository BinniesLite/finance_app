const express = require("express");
const validate = require("../middleware/validate");
const transactionSchema = require("../validations/transaction.validation");

const {
  getTransaction,
  getTransactionById,
  createTransaction,
} = require("../controllers/transaction");


const router = express.Router();


// get all transactions
router.get("/", getTransaction);

// get transaction by id
router.get("/:id", getTransactionById);

// create transaction
router.post("/create", validate(transactionSchema), createTransaction);

module.exports = router;
