import * as z from 'zod';
// prettier-ignore
export const UserFollowerLinkModelSchema = z.object({
    user_id: z.string(),
    user: z.unknown(),
    follower_id: z.string(),
    follower: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserFollowerLinkPureType = z.infer<typeof UserFollowerLinkModelSchema>;
