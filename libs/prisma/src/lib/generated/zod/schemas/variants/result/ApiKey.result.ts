import * as z from 'zod';
// prettier-ignore
export const ApiKeyResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    key: z.string(),
    uuid: z.string(),
    user: z.unknown(),
    userId: z.string(),
    Scopes: z.array(z.unknown())
}).strict();

export type ApiKeyResultType = z.infer<typeof ApiKeyResultSchema>;
