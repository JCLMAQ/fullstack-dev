import * as z from 'zod';
// prettier-ignore
export const StoryResultSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().nullable(),
    isPublic: z.boolean().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    caption: z.string(),
    user_id: z.string(),
    user: z.unknown(),
    Images: z.array(z.unknown()),
    Files: z.array(z.unknown())
}).strict();

export type StoryResultType = z.infer<typeof StoryResultSchema>;
