import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  slug: z.string(),
  type: DictioEntryTypeSchema.optional()
}).strict();
export const WordUncheckedCreateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.WordUncheckedCreateWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.WordUncheckedCreateWithoutTranslationsInput>;
export const WordUncheckedCreateWithoutTranslationsInputObjectZodSchema = makeSchema();
