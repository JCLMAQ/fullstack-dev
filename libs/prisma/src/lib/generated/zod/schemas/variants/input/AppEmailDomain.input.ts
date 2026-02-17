import * as z from 'zod';
// prettier-ignore
export const AppEmailDomainInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    domain: z.string(),
    allowed: z.boolean()
}).strict();

export type AppEmailDomainInputType = z.infer<typeof AppEmailDomainInputSchema>;
