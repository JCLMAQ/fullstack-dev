import * as z from 'zod';
// prettier-ignore
export const CommentModelSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().nullable(),
    isPublic: z.boolean().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    orderComment: z.number().int(),
    content: z.string().nullable(),
    post: z.unknown(),
    postId: z.string(),
    author: z.unknown(),
    authorId: z.string(),
    Files: z.array(z.unknown())
}).strict();

export type CommentPureType = z.infer<typeof CommentModelSchema>;
