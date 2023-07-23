const {z} = require('zod');

const transactionSchema = z.object({
    amount: z.number().positive(),
    description: z.string().min(1).max(255).optional(),
    type: z.enum(['income', 'expense']),
    walletId: z.string()
});

module.exports = transactionSchema;