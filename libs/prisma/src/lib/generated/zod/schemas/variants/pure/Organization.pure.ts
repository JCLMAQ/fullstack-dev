import * as z from 'zod';
// prettier-ignore
export const OrganizationModelSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().nullable(),
    isPublic: z.boolean().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    name: z.string(),
    description: z.string().nullable(),
    address: z.unknown().nullable(),
    emailITAdmin: z.string(),
    webSite: z.string().nullable(),
    OrgEmails: z.array(z.unknown()),
    OrgDomains: z.array(z.unknown()),
    mainOrg: z.unknown().nullable(),
    mainOrgId: z.string().nullable(),
    OrgEntity: z.array(z.unknown()),
    Members: z.array(z.unknown()),
    Posts: z.array(z.unknown()),
    Groups: z.array(z.unknown()),
    Files: z.array(z.unknown()),
    Tasks: z.array(z.unknown()),
    Todos: z.array(z.unknown()),
    Images: z.array(z.unknown())
}).strict();

export type OrganizationPureType = z.infer<typeof OrganizationModelSchema>;
