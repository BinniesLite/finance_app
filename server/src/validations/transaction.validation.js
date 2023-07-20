const {z} = require('zod');

const transactionSchema = z.object({
    amount: z.number().positive(),
    description: z.string().min(1).max(255).optional(),
    walletId: z.string().optional(),
    type: z.enum(['income', 'expense'])
});

module.exports = transactionSchema;