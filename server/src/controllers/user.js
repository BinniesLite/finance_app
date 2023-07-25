const prisma = require('../db/prisma');

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.json(error);
  }
};

const getWalletsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const wallets = await prisma.wallet.findMany({
      where: {
        id: id,
      },
    });
    res.json(wallets);
  } catch (error) {
    res.json(error);
  }
};
