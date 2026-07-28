import * as z from 'zod';
// prettier-ignore
export const AppEmailDomainInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    domain: z.string(),
    allowed: z.boolean()
}).strict();

export type AppEmailDomainInputType = z.infer<typeof AppEmailDomainInputSchema>;
