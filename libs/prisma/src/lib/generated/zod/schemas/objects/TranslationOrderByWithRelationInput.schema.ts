import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WordOrderByWithRelationInputObjectSchema as WordOrderByWithRelationInputObjectSchema } from './WordOrderByWithRelationInput.schema';
import { LanguageOrderByWithRelationInputObjectSchema as LanguageOrderByWithRelationInputObjectSchema } from './LanguageOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  definition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  wordId: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  word: z.lazy(() => WordOrderByWithRelationInputObjectSchema).optional(),
  language: z.lazy(() => LanguageOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TranslationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TranslationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationOrderByWithRelationInput>;
export const TranslationOrderByWithRelationInputObjectZodSchema = makeSchema();
