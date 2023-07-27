const prisma = require("../db/prisma");

// get all wallets
//endpoint: /api/wallet
const getAllWallets = async (req, res) => {
    try {
        const wallets = await prisma.wallet.findMany();
        res.status(200).json(wallets);
    } catch (error) {
        res.status(500).json(error);
    }
   
};

// get wallet by id
// endpoint: /api/wallet/:id
const getWalletById = async (req, res) => {
    const id = req.params.id;
    try {
        const wallet = await prisma.wallet.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(wallet);
    } catch (error) {
        res.status(500).json(error);
    }
};

// create wallet
// endpoint: /api/wallet/create
const createWallet = async (req, res) => {
    const {name, description} = req.body;

    try {
        // check if wallet already exists
        const wallet = await prisma.wallet.findUnique({
            where: {
                name: name
            }
        });

        if (wallet) {
            return res.status(400).json({message: "Wallet already exists"});
        }

        const result = await prisma.wallet.create({
            data: {
                name: name,
                description: description
            }
        });
        res.status(201).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


// delete wallet
// endpoint: /api/wallet/delete/:id
const deleteWallet = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await prisma.wallet.delete({
            where: {
                id: id
            }
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

// name change
// endpoint: /api/wallet/name/:id
const changeWalletName = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    try {
        const result = await prisma.wallet.update({
            where: {
                id: id
            },
            data: {
                name: name
            }
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllWallets,
    getWalletById,
    createWallet,
    deleteWallet,
    changeWalletName
};