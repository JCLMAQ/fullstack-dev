import * as z from 'zod';
// prettier-ignore
export const TagCategoriesInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    modelName: z.string(),
    description: z.string().optional().nullable(),
    recordId: z.string(),
    TagValues: z.array(z.unknown())
}).strict();

export type TagCategoriesInputType = z.infer<typeof TagCategoriesInputSchema>;
