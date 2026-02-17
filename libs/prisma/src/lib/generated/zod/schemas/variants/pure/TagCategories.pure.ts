import * as z from 'zod';
// prettier-ignore
export const TagCategoriesModelSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    modelName: z.string(),
    description: z.string().nullable(),
    recordId: z.string(),
    TagValues: z.array(z.unknown())
}).strict();

export type TagCategoriesPureType = z.infer<typeof TagCategoriesModelSchema>;
