import * as z from 'zod';
import { DictioEntryTypeSchema } from '../../enums/DictioEntryType.schema';
// prettier-ignore
export const WordResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().nullable(),
    isPublic: z.boolean().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    slug: z.string(),
    type: DictioEntryTypeSchema,
    translations: z.array(z.unknown())
}).strict();

export type WordResultType = z.infer<typeof WordResultSchema>;
