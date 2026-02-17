import * as z from 'zod';
// prettier-ignore
export const ProfileResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    orderProfile: z.number().int(),
    Users: z.array(z.unknown()),
    bio: z.string()
}).strict();

export type ProfileResultType = z.infer<typeof ProfileResultSchema>;
