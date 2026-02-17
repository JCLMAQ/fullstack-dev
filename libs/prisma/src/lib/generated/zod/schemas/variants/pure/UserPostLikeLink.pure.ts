import * as z from 'zod';
// prettier-ignore
export const UserPostLikeLinkModelSchema = z.object({
    user_id: z.string(),
    user: z.unknown(),
    post_id: z.string(),
    post: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserPostLikeLinkPureType = z.infer<typeof UserPostLikeLinkModelSchema>;
