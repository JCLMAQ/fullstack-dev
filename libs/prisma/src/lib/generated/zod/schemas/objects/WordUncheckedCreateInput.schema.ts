import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema';
import { TranslationUncheckedCreateNestedManyWithoutWordInputObjectSchema as TranslationUncheckedCreateNestedManyWithoutWordInputObjectSchema } from './TranslationUncheckedCreateNestedManyWithoutWordInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  slug: z.string(),
  type: DictioEntryTypeSchema.optional(),
  translations: z.lazy(() => TranslationUncheckedCreateNestedManyWithoutWordInputObjectSchema).optional()
}).strict();
export const WordUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WordUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WordUncheckedCreateInput>;
export const WordUncheckedCreateInputObjectZodSchema = makeSchema();
