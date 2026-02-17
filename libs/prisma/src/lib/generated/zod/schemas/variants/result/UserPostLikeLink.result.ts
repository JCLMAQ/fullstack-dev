import * as z from 'zod';
// prettier-ignore
export const UserPostLikeLinkResultSchema = z.object({
    user_id: z.string(),
    user: z.unknown(),
    post_id: z.string(),
    post: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserPostLikeLinkResultType = z.infer<typeof UserPostLikeLinkResultSchema>;
