const prisma = require("../db/prisma");
const bcrypt = require('bcrypt');
//login user
// endpoint: /api/user/login

const loginUser = async (req, res) => {

};

// singup user
// endpoint: /api/user/signup
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
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
    res.status(200).json({ email, user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser }