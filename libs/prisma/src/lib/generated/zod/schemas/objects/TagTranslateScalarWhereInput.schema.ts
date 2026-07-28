import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const tagtranslatescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagTranslateScalarWhereInputObjectSchema), z.lazy(() => TagTranslateScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagTranslateScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagTranslateScalarWhereInputObjectSchema), z.lazy(() => TagTranslateScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  languageId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  translation: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const TagTranslateScalarWhereInputObjectSchema: z.ZodType<Prisma.TagTranslateScalarWhereInput> = tagtranslatescalarwhereinputSchema as unknown as z.ZodType<Prisma.TagTranslateScalarWhereInput>;
export const TagTranslateScalarWhereInputObjectZodSchema = tagtranslatescalarwhereinputSchema;
