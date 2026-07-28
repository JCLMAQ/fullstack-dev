import * as z from 'zod';
// prettier-ignore
export const ApiKeyInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    key: z.string(),
    uuid: z.string(),
    user: z.unknown(),
    userId: z.string(),
    Scopes: z.array(z.unknown())
}).strict();

export type ApiKeyInputType = z.infer<typeof ApiKeyInputSchema>;
