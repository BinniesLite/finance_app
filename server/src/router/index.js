const express = require("express");
const transactionRouter = require("./transaction");
const walletRouter = require("./wallet");
const incomeRouter = require("./income");
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
        path: "/income",
        route: incomeRouter,
    },
    {
        path: "/chat",
        route: chatRouter,
    }

]

appRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;