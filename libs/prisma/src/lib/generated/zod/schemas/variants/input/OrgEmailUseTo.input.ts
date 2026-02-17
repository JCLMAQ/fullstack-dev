import * as z from 'zod';
// prettier-ignore
export const OrgEmailUseToInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    useTo: z.string(),
    isActiv: z.boolean(),
    emailOrg: z.unknown(),
    emailOrgId: z.number().int()
}).strict();

export type OrgEmailUseToInputType = z.infer<typeof OrgEmailUseToInputSchema>;
