const prisma = require("../db/prisma");


// create user
// endpoint: /api/user/create
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};