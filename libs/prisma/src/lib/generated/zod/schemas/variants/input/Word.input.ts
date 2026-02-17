import * as z from 'zod';
import { DictioEntryTypeSchema } from '../../enums/DictioEntryType.schema';
// prettier-ignore
export const WordInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().optional().nullable(),
    isPublic: z.boolean().optional().nullable(),
    isDeleted: z.number().int().optional().nullable(),
    isDeletedDT: z.date().optional().nullable(),
    slug: z.string(),
    type: DictioEntryTypeSchema,
    translations: z.array(z.unknown())
}).strict();

export type WordInputType = z.infer<typeof WordInputSchema>;
