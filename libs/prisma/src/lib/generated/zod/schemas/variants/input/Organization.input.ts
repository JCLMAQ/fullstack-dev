import * as z from 'zod';
// prettier-ignore
export const OrganizationInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().optional().nullable(),
    isPublic: z.boolean().optional().nullable(),
    isDeleted: z.number().int().optional().nullable(),
    isDeletedDT: z.date().optional().nullable(),
    name: z.string(),
    description: z.string().optional().nullable(),
    address: z.unknown().optional().nullable(),
    emailITAdmin: z.string(),
    webSite: z.string().optional().nullable(),
    OrgEmails: z.array(z.unknown()),
    OrgDomains: z.array(z.unknown()),
    mainOrg: z.unknown().optional().nullable(),
    mainOrgId: z.string().optional().nullable(),
    OrgEntity: z.array(z.unknown()),
    Members: z.array(z.unknown()),
    Posts: z.array(z.unknown()),
    Groups: z.array(z.unknown()),
    Files: z.array(z.unknown()),
    Tasks: z.array(z.unknown()),
    Todos: z.array(z.unknown()),
    Images: z.array(z.unknown())
}).strict();

export type OrganizationInputType = z.infer<typeof OrganizationInputSchema>;
