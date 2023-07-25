const router = require('express').Router();
const { initiateChat, sendChat } = require('../controllers/chat');

router.get('/initiate', initiateChat);

router.post('/send', sendChat);

module.exports = router;

