import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TagValueListRelationFilterObjectSchema as TagValueListRelationFilterObjectSchema } from './TagValueListRelationFilter.schema'

const tagcategorieswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagCategoriesWhereInputObjectSchema), z.lazy(() => TagCategoriesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagCategoriesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagCategoriesWhereInputObjectSchema), z.lazy(() => TagCategoriesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  modelName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  recordId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  TagValues: z.lazy(() => TagValueListRelationFilterObjectSchema).optional()
}).strict();
export const TagCategoriesWhereInputObjectSchema: z.ZodType<Prisma.TagCategoriesWhereInput> = tagcategorieswhereinputSchema as unknown as z.ZodType<Prisma.TagCategoriesWhereInput>;
export const TagCategoriesWhereInputObjectZodSchema = tagcategorieswhereinputSchema;
