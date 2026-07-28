import * as z from 'zod';
// prettier-ignore
export const UserPostLikeLinkInputSchema = z.object({
    user_id: z.string(),
    user: z.unknown(),
    post_id: z.string(),
    post: z.unknown(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type UserPostLikeLinkInputType = z.infer<typeof UserPostLikeLinkInputSchema>;
