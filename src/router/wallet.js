const express = require("express");
// controller
const {
  getAllWallets,
  getWalletById,
  createWallet,
  deleteWallet,
  changeWalletName
} = require("../controllers/wallet");
// validation
const validate = require("../middleware/validate");
const walletSchema = require("../validations/wallet.validation");

const router = express.Router();

// get all wallets
//endpoint: /api/wallet
router.get("/", getAllWallets);

// get wallet by id
// endpoint: /api/wallet/:id
router.get("/:id", getWalletById);

// create wallet
// endpoint: /api/wallet/create
router.post("/create", validate(walletSchema), createWallet);

// delete wallet
// endpoint: /api/wallet/delete/:id
router.delete("/delete/:id", deleteWallet);

// name change
// endpoint: /api/wallet/name/:id
router.put("/name/:id", validate(walletSchema), changeWalletName);

module.exports = router;
