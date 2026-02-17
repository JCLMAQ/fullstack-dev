import * as z from 'zod';
// prettier-ignore
export const PostModelSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    isPublic: z.boolean(),
    owner: z.unknown(),
    ownerId: z.string(),
    org: z.unknown().nullable(),
    orgId: z.string().nullable(),
    groups: z.array(z.unknown()),
    orderPost: z.number().int().nullable(),
    title: z.string(),
    content: z.string().nullable(),
    Categories: z.array(z.unknown()),
    Comments: z.array(z.unknown()),
    LikedBys: z.array(z.unknown()),
    Images: z.array(z.unknown()),
    Files: z.array(z.unknown()),
    Tags: z.array(z.unknown())
}).strict();

export type PostPureType = z.infer<typeof PostModelSchema>;
