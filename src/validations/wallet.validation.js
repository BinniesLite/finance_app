// Create a validation for wallets using zod
// 
const z = require('zod');
// description is optional
// type is a string with only 2 options: income or expense

const walletSchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255).optional(),
    createdAt: z.string().optional(),
});

module.exports = walletSchema;