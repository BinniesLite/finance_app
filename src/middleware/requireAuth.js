const jwt = require('jsonwebtoken');
const prisma = require("../db/prisma");

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'You must be logged in' });
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: _id },
            select: {
                id: true, 
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch(error) {
        console.log(error);
        res.status(401).json({ error: 'You must be logged in' });
    }
}

module.exports = requireAuth;