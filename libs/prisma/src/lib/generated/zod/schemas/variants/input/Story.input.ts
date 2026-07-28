import * as z from 'zod';
// prettier-ignore
export const StoryInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean().optional().nullable(),
    isPublic: z.boolean().optional().nullable(),
    isDeleted: z.number().int().optional().nullable(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    caption: z.string(),
    user_id: z.string(),
    user: z.unknown(),
    Images: z.array(z.unknown()),
    Files: z.array(z.unknown())
}).strict();

export type StoryInputType = z.infer<typeof StoryInputSchema>;
