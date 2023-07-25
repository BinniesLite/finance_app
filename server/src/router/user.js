const express = require('express');
const validate = require('../middleware/validate');
const userSchema = require('../validations/user.validation');

const { getUser, getUserById, createUser } = require('../controllers/user');

const router = express.Router();

//get all users
router.get('/', getUser);

//get user by id
router.get('/:id', getUserById);

//create user
router.post('/create', validate(userSchema), createUser);

//get wallets by user id
router.get('/:id/wallets', getUserById);

module.exports = router;