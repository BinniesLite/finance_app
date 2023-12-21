const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const userSchema = require("../validations/user.validation");

//controller functions
const {
    signupUser,
    loginUser
} = require("../controllers/user");

// signup user
router.post("/signup", validate(userSchema), signupUser);

// login user
router.post("/login", loginUser);

module.exports = router;