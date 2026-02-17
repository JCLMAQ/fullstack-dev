import * as z from 'zod';
// prettier-ignore
export const UserSecretInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    userId: z.string(),
    pwdHash: z.string().optional().nullable(),
    salt: z.string().optional().nullable(),
    isAdmin: z.boolean().optional().nullable()
}).strict();

export type UserSecretInputType = z.infer<typeof UserSecretInputSchema>;
