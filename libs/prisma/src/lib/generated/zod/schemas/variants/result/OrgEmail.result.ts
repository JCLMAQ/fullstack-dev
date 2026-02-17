import * as z from 'zod';
// prettier-ignore
export const OrgEmailResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    email: z.string(),
    description: z.string().nullable(),
    org: z.unknown().nullable(),
    orgId: z.string(),
    OrgEmailUseTos: z.array(z.unknown())
}).strict();

export type OrgEmailResultType = z.infer<typeof OrgEmailResultSchema>;
