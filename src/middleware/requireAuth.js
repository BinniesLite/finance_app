// const jwt = require('jsonwebtoken');
// const prisma = require("../db/prisma");

// const requireAuth = async (req, res, next) => {
//     const { authorization } = req.headers;

//     if (!authorization) {
//         return res.status(401).json({ error: 'You must be logged in' });
//     }

//     const token = authorization.split(' ')[1];
//     console.log("token in requireAuth: ", token);

//     try {
//         const {_id} = jwt.verify(token, process.env.JWT_SECRET);
//         console.log("_id in requireAuth: ", _id);
//         const user = await prisma.user.findUnique({
//             where: { id: _id },
//             select: {
//                 id: true, 
//             }
//         });

//         if (!user) {
//             return res.status(401).json({ error: 'User not found' });
//         }

//         req.user = user;
//         next();
//     } catch(error) {
//         console.log(error);
//         res.status(401).json({ error: 'You must be logged in' });
//     }
// }

// module.exports = requireAuth;

const jwt = require('jsonwebtoken');
const prisma = require("../db/prisma");

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log("authorization in requireAuth: ", authorization);
    if (!authorization) {
        return res.status(401).json({ error: 'You must be logged in.' });
    }

    const parts = authorization.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: 'Authorization format is "Bearer <token>".' });
    }

    const token = parts[1];
    console.log("token in requireAuth: ", token);

    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        console.log("_id in requireAuth: ", _id);
        const user = await prisma.user.findUnique({
            where: { id: _id },
            select: {
                id: true, 
            }
        });

        if (!user) {
            return res.status(401).json({ error: 'User not found.' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        switch (error.name) {
            case 'JsonWebTokenError':
                return res.status(401).json({ error: 'Invalid token.' });
            case 'TokenExpiredError':
                return res.status(401).json({ error: 'Token has expired.' });
            // Add more cases as needed for other errors
            default:
                return res.status(401).json({ error: 'You must be logged in.' });
        }
    }
}

module.exports = requireAuth;