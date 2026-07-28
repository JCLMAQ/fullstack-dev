import * as z from 'zod';
// prettier-ignore
export const OrgEmailInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    email: z.string(),
    description: z.string().optional().nullable(),
    org: z.unknown().optional().nullable(),
    orgId: z.string(),
    OrgEmailUseTos: z.array(z.unknown())
}).strict();

export type OrgEmailInputType = z.infer<typeof OrgEmailInputSchema>;
