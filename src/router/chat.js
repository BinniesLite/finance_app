const router = require('express').Router();
const { initiateChat, sendChat, sendChatWallet, sendChatTransaction } = require('../controllers/chat');

router.get('/initiate', initiateChat);

router.post('/send', sendChat);

router.post('/send-wallet', sendChatWallet);

router.post('/send-transaction', sendChatTransaction);

module.exports = router;

