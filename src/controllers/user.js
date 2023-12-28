const prisma = require("../db/prisma");
const bcrypt = require('bcrypt');
const validateSignup = require('../utils/validateAuth');
const createToken = require('../utils/tokenizer');

//login user
// endpoint: /api/user/login

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // validation
    if(!email || !password) {
      throw Error('All fields are required');
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw Error("User not found");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Invalid credentials");
    }

    //create a token
    const token = createToken(user.id);

    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// singup user
// endpoint: /api/user/signup
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // validation
    if(validateSignup(name, email, password)) {
      throw Error('All fields are required');
    }
    
    const exists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (exists) {
      throw Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    //create a token
    const token = createToken(user.id);

    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser }