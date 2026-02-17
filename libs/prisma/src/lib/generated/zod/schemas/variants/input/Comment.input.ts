import * as z from 'zod';
// prettier-ignore
export const CommentInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().optional().nullable(),
    isPublic: z.boolean().optional().nullable(),
    isDeleted: z.number().int().optional().nullable(),
    isDeletedDT: z.date().optional().nullable(),
    orderComment: z.number().int(),
    content: z.string().optional().nullable(),
    post: z.unknown(),
    postId: z.string(),
    author: z.unknown(),
    authorId: z.string(),
    Files: z.array(z.unknown())
}).strict();

export type CommentInputType = z.infer<typeof CommentInputSchema>;
