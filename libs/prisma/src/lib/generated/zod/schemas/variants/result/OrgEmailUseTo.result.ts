import * as z from 'zod';
// prettier-ignore
export const OrgEmailUseToResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    useTo: z.string(),
    isActiv: z.boolean(),
    emailOrg: z.unknown(),
    emailOrgId: z.number().int()
}).strict();

export type OrgEmailUseToResultType = z.infer<typeof OrgEmailUseToResultSchema>;
