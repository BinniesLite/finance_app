const validator = require('validator');

const validateSignup = (name, email, password) => {
    try {
        // validation
        if(!email || !password || !name) {
            throw Error('All fields are required');
        }

        if(!validator.isEmail(email)) {
            throw Error('Invalid email');
        }

        if(password.length < 6 || password.length > 255) {
            throw Error('Password must be atleast 6 characters long');
        }

        if(!validator.isStrongPassword(password)) {
            throw Error('Password must contain atleast 1 lowercase, 1 uppercase, 1 number and 1 special character');
        
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = validateSignup;