// Create a validation for wallets using zod
// 
const z = require('zod');
// description is optional

const walletSchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255).optional(),
    createdAt: z.string().optional(),
    userId: z.string().optional(),
});

module.exports = walletSchema;