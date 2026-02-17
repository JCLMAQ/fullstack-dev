import * as z from 'zod';
// prettier-ignore
export const AppEmailDomainResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    domain: z.string(),
    allowed: z.boolean()
}).strict();

export type AppEmailDomainResultType = z.infer<typeof AppEmailDomainResultSchema>;
