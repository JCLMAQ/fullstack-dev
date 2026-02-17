import * as z from 'zod';
// prettier-ignore
export const RefreshTokenResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    userId: z.string(),
    tokenId: z.string()
}).strict();

export type RefreshTokenResultType = z.infer<typeof RefreshTokenResultSchema>;
