import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const translationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TranslationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TranslationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TranslationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TranslationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TranslationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  definition: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  wordId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  languageId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TranslationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TranslationScalarWhereWithAggregatesInput> = translationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TranslationScalarWhereWithAggregatesInput>;
export const TranslationScalarWhereWithAggregatesInputObjectZodSchema = translationscalarwherewithaggregatesinputSchema;
