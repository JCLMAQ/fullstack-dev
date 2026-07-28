import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const translationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TranslationScalarWhereInputObjectSchema), z.lazy(() => TranslationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TranslationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TranslationScalarWhereInputObjectSchema), z.lazy(() => TranslationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  definition: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  wordId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  languageId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TranslationScalarWhereInputObjectSchema: z.ZodType<Prisma.TranslationScalarWhereInput> = translationscalarwhereinputSchema as unknown as z.ZodType<Prisma.TranslationScalarWhereInput>;
export const TranslationScalarWhereInputObjectZodSchema = translationscalarwhereinputSchema;
