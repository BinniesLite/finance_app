const express = require("express");
const transactionRouter = require("./transaction");
const walletRouter = require("./wallet");
const filterRouter = require("./filter");
const calculationRouter = require("./calculation");
const chatRouter = require("./chat");
const userRouter = require("./auth");


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
        path: "/user",
        route: userRouter,
    },
]

appRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

console.log("Router is running");

module.exports = router; 