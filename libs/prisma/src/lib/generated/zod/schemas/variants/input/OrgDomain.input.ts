import * as z from 'zod';
// prettier-ignore
export const OrgDomainInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    domainName: z.string(),
    extension: z.string(),
    org: z.unknown().optional().nullable(),
    orgId: z.string()
}).strict();

export type OrgDomainInputType = z.infer<typeof OrgDomainInputSchema>;
