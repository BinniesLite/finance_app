const express = require("express");
const transactionRouter = require("./transaction");
const walletRouter = require("./wallet");
const filterRouter = require("./filter");
const calculationRouter = require("./calculation");
const chatRouter = require("./chat");


const router = express.Router();

const appRoutes = [
    {
        path: "/transaction",
        route: transactionRouter,
    },
    {
        path: "/wallet",
        route: walletRouter,
    },
    {
        path: "/filter",
        route: filterRouter,
    },
    {
        path: "/calculation",
        route: calculationRouter,
    },
    {
        path: "/chat",
        route: chatRouter,
    },
    {
        path: "/",
        route: async (req, res) => {
            console.log("Welcome to Wallet API");
            res.send("Welcome to Wallet API");
        }
    }
]

appRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

console.log("Router is running");

module.exports = router;