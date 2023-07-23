const {z} = require('zod');

const userSchema = a.onject({
    // username: z.string().min(1).max(255),
    // password: z.string().min(1).max(255),
    email: z.string().email().min(1).max(255),
    fullname: z.string().min(1).max(255),
    numberOfWallets: z.number().positive().optional(),    
});

const userLoginSchema = z.object({
    username: z.string().min(1).max(255),
    password: z.string().min(1).max(255),
});

module.exports = {userSchema, userLoginSchema};