import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema';
import { TranslationCreateNestedManyWithoutWordInputObjectSchema as TranslationCreateNestedManyWithoutWordInputObjectSchema } from './TranslationCreateNestedManyWithoutWordInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  slug: z.string(),
  type: DictioEntryTypeSchema.optional(),
  translations: z.lazy(() => TranslationCreateNestedManyWithoutWordInputObjectSchema).optional()
}).strict();
export const WordCreateInputObjectSchema: z.ZodType<Prisma.WordCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WordCreateInput>;
export const WordCreateInputObjectZodSchema = makeSchema();
