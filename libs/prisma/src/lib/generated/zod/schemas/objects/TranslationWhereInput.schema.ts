import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { WordScalarRelationFilterObjectSchema as WordScalarRelationFilterObjectSchema } from './WordScalarRelationFilter.schema';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './WordWhereInput.schema';
import { LanguageScalarRelationFilterObjectSchema as LanguageScalarRelationFilterObjectSchema } from './LanguageScalarRelationFilter.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema'

const translationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TranslationWhereInputObjectSchema), z.lazy(() => TranslationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TranslationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TranslationWhereInputObjectSchema), z.lazy(() => TranslationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  definition: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  wordId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  languageId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  word: z.union([z.lazy(() => WordScalarRelationFilterObjectSchema), z.lazy(() => WordWhereInputObjectSchema)]).optional(),
  language: z.union([z.lazy(() => LanguageScalarRelationFilterObjectSchema), z.lazy(() => LanguageWhereInputObjectSchema)]).optional()
}).strict();
export const TranslationWhereInputObjectSchema: z.ZodType<Prisma.TranslationWhereInput> = translationwhereinputSchema as unknown as z.ZodType<Prisma.TranslationWhereInput>;
export const TranslationWhereInputObjectZodSchema = translationwhereinputSchema;
