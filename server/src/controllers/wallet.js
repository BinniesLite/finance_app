const prisma = require("../db/prisma");
const http = require("http-status");

const getWallet = async (req, res) => {
  try {
    const wallets = await prisma.wallet.findMany();

    res.status(http.OK).json(wallets);
  } catch (error) {
    res.json(error);
  }
};

const getTransactionByWalletId = async (req, res) => {
  const { id } = req.params;

  const transactions = await prisma.transaction.findMany({
    where: {
      walletId: id,
    },
  });

  res.status(201).json(transactions);
};

const createWallet = async (req, res) => {
  try {
    const { name, description } = req.body;

    result = await prisma.wallet.create({
      data: {
        name: name,
        description: description,
      },
    });

    res.status(http.CREATED).json(result);
  } catch (error) {
    res.json({ error: error });
  }
};

const getWalletById = async (req, res) => {
  const { id } = req.params;
  const wallet = await prisma.wallet.findUnique({
    where: {
      id: id,
    },
  });
  res.json(wallet);
};

module.exports = {
  getTransactionByWalletId,
  createWallet,
  getWallet,
  getWalletById,
};
