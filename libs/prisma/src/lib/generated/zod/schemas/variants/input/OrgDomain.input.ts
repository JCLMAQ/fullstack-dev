import * as z from 'zod';
// prettier-ignore
export const OrgDomainInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    domainName: z.string(),
    extension: z.string(),
    org: z.unknown().optional().nullable(),
    orgId: z.string()
}).strict();

export type OrgDomainInputType = z.infer<typeof OrgDomainInputSchema>;
