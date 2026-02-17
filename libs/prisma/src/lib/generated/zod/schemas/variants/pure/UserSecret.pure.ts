import * as z from 'zod';
// prettier-ignore
export const UserSecretModelSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    userId: z.string(),
    pwdHash: z.string().nullable(),
    salt: z.string().nullable(),
    isAdmin: z.boolean().nullable()
}).strict();

export type UserSecretPureType = z.infer<typeof UserSecretModelSchema>;
