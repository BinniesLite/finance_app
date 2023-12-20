const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const userSchema = require("../validations/user.validation");
const {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/user");

// create user
// endpoint: /api/user/create
router.post("/create", validate(userSchema), createUser);

module.exports = router;