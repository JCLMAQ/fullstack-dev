import * as z from 'zod';
// prettier-ignore
export const ScopeInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    scope: z.string(),
    ApiKey: z.array(z.unknown())
}).strict();

export type ScopeInputType = z.infer<typeof ScopeInputSchema>;
