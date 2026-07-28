import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tagtranslatescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TagTranslateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagTranslateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagTranslateScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagTranslateScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TagTranslateScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  languageId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  translation: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const TagTranslateScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TagTranslateScalarWhereWithAggregatesInput> = tagtranslatescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TagTranslateScalarWhereWithAggregatesInput>;
export const TagTranslateScalarWhereWithAggregatesInputObjectZodSchema = tagtranslatescalarwherewithaggregatesinputSchema;
