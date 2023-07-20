const express = require("express");
// controller
const {
  getTransactionByWalletId,
  createWallet,
  getWallet,
  getWalletById,
} = require("../controllers/wallet");
// validation
const validate = require("../middleware/validate");
const walletSchema = require("../validations/wallet.validation");

const router = express.Router();

// get all wallets
router.get("/", getWallet);

// get wallet by id
router.get("/:id", getWalletById);

// create wallet
router.post("/create", validate(walletSchema), createWallet);

// query transaction by wallet id
router.get("/:id/transactions", getTransactionByWalletId);

module.exports = router;
