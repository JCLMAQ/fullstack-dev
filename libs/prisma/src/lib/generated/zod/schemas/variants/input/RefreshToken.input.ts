import * as z from 'zod';
// prettier-ignore
export const RefreshTokenInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    userId: z.string(),
    tokenId: z.string()
}).strict();

export type RefreshTokenInputType = z.infer<typeof RefreshTokenInputSchema>;
