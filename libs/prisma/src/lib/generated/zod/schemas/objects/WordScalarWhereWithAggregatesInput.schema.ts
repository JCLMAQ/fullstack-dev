import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumDictioEntryTypeWithAggregatesFilterObjectSchema as EnumDictioEntryTypeWithAggregatesFilterObjectSchema } from './EnumDictioEntryTypeWithAggregatesFilter.schema';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema'

const wordscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WordScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WordScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WordScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  isDeleted: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumDictioEntryTypeWithAggregatesFilterObjectSchema), DictioEntryTypeSchema]).optional()
}).strict();
export const WordScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WordScalarWhereWithAggregatesInput> = wordscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WordScalarWhereWithAggregatesInput>;
export const WordScalarWhereWithAggregatesInputObjectZodSchema = wordscalarwherewithaggregatesinputSchema;
