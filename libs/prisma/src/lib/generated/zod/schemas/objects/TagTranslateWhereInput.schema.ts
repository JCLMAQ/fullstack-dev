import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { LanguageScalarRelationFilterObjectSchema as LanguageScalarRelationFilterObjectSchema } from './LanguageScalarRelationFilter.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema';
import { TagValueScalarRelationFilterObjectSchema as TagValueScalarRelationFilterObjectSchema } from './TagValueScalarRelationFilter.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const tagtranslatewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagTranslateWhereInputObjectSchema), z.lazy(() => TagTranslateWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagTranslateWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagTranslateWhereInputObjectSchema), z.lazy(() => TagTranslateWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  languageId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  translation: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  language: z.union([z.lazy(() => LanguageScalarRelationFilterObjectSchema), z.lazy(() => LanguageWhereInputObjectSchema)]).optional(),
  tagValue: z.union([z.lazy(() => TagValueScalarRelationFilterObjectSchema), z.lazy(() => TagValueWhereInputObjectSchema)]).optional()
}).strict();
export const TagTranslateWhereInputObjectSchema: z.ZodType<Prisma.TagTranslateWhereInput> = tagtranslatewhereinputSchema as unknown as z.ZodType<Prisma.TagTranslateWhereInput>;
export const TagTranslateWhereInputObjectZodSchema = tagtranslatewhereinputSchema;
