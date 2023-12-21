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

// const { ZodError } = require('zod');
// const http = require("http-status");

// const validation = (schema) => (req, res, next) => {
//     try {
//         const validatedBody = schema.parse(req.body);
//         req.body = validatedBody;
//         next();
//     } catch (error) {
//         // Check if the error is an instance of ZodError
//         if (error instanceof ZodError) {
//             const errorDetails = error.issues.map(issue => ({
//                 path: issue.path.join('.'), // Join paths with dot notation
//                 message: issue.message
//             }));

//             // Send the formatted error details with the response
//             res.status(http.BAD_REQUEST).json({
//                 status: 'error',
//                 message: 'Validation failed',
//                 errors: errorDetails
//             });
//         } else {
//             // Handle unexpected errors
//             console.error(error);
//             res.status(http.INTERNAL_SERVER_ERROR).json({
//                 status: 'error',
//                 message: 'An unexpected error occurred'
//             });
//         }
//     }
// };

// module.exports = validation;