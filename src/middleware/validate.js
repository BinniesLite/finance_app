const http = require("http-status");

const validation = (schema) => (req, res, next) => {
    try {
        const validatedBody = schema.parse(req.body);
        req.body = validatedBody;
    
        next();

    } catch (error) {
        res.status(http.BAD_REQUEST).json(error);
    }
}

module.exports = validation;