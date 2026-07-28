import * as z from 'zod';
// prettier-ignore
export const UserSecretInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    user: z.unknown(),
    userId: z.string(),
    pwdHash: z.string().optional().nullable(),
    salt: z.string().optional().nullable(),
    isAdmin: z.boolean().optional().nullable()
}).strict();

export type UserSecretInputType = z.infer<typeof UserSecretInputSchema>;
