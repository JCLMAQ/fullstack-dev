import * as z from 'zod';
// prettier-ignore
export const ScopeInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    scope: z.string(),
    ApiKey: z.array(z.unknown())
}).strict();

export type ScopeInputType = z.infer<typeof ScopeInputSchema>;
