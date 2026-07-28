import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  slug: z.string(),
  type: DictioEntryTypeSchema.optional()
}).strict();
export const WordCreateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.WordCreateWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.WordCreateWithoutTranslationsInput>;
export const WordCreateWithoutTranslationsInputObjectZodSchema = makeSchema();
