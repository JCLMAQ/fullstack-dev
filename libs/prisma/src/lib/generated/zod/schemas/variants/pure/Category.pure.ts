import * as z from 'zod';
// prettier-ignore
export const CategoryModelSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().nullable(),
    isPublic: z.boolean().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    orderCategory: z.number().int(),
    name: z.string(),
    Posts: z.array(z.unknown())
}).strict();

export type CategoryPureType = z.infer<typeof CategoryModelSchema>;
