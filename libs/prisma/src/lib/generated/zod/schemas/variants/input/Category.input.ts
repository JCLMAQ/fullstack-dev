import * as z from 'zod';
// prettier-ignore
export const CategoryInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean().optional().nullable(),
    isPublic: z.boolean().optional().nullable(),
    isDeleted: z.number().int().optional().nullable(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    orderCategory: z.number().int(),
    name: z.string(),
    Posts: z.array(z.unknown())
}).strict();

export type CategoryInputType = z.infer<typeof CategoryInputSchema>;
