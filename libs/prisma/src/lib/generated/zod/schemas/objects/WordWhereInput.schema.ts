import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumDictioEntryTypeFilterObjectSchema as EnumDictioEntryTypeFilterObjectSchema } from './EnumDictioEntryTypeFilter.schema';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema';
import { TranslationListRelationFilterObjectSchema as TranslationListRelationFilterObjectSchema } from './TranslationListRelationFilter.schema'

const wordwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WordWhereInputObjectSchema), z.lazy(() => WordWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WordWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WordWhereInputObjectSchema), z.lazy(() => WordWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isDeleted: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumDictioEntryTypeFilterObjectSchema), DictioEntryTypeSchema]).optional(),
  translations: z.lazy(() => TranslationListRelationFilterObjectSchema).optional()
}).strict();
export const WordWhereInputObjectSchema: z.ZodType<Prisma.WordWhereInput> = wordwhereinputSchema as unknown as z.ZodType<Prisma.WordWhereInput>;
export const WordWhereInputObjectZodSchema = wordwhereinputSchema;
