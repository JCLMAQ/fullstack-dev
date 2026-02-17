import * as z from 'zod';
// prettier-ignore
export const OrgDomainResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    domainName: z.string(),
    extension: z.string(),
    org: z.unknown().nullable(),
    orgId: z.string()
}).strict();

export type OrgDomainResultType = z.infer<typeof OrgDomainResultSchema>;
