import * as z from 'zod';
// prettier-ignore
export const ProfileInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    orderProfile: z.number().int(),
    Users: z.array(z.unknown()),
    bio: z.string()
}).strict();

export type ProfileInputType = z.infer<typeof ProfileInputSchema>;
