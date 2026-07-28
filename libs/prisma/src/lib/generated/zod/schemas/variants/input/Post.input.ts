import * as z from 'zod';
// prettier-ignore
export const PostInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    isPublic: z.boolean(),
    owner: z.unknown(),
    ownerId: z.string(),
    org: z.unknown().optional().nullable(),
    orgId: z.string().optional().nullable(),
    groups: z.array(z.unknown()),
    orderPost: z.number().int().optional().nullable(),
    title: z.string(),
    content: z.string().optional().nullable(),
    Categories: z.array(z.unknown()),
    Comments: z.array(z.unknown()),
    LikedBys: z.array(z.unknown()),
    Images: z.array(z.unknown()),
    Files: z.array(z.unknown()),
    Tags: z.array(z.unknown())
}).strict();

export type PostInputType = z.infer<typeof PostInputSchema>;
