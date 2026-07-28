import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const apikeyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  uuid: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ApiKeyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ApiKeyScalarWhereWithAggregatesInput> = apikeyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ApiKeyScalarWhereWithAggregatesInput>;
export const ApiKeyScalarWhereWithAggregatesInputObjectZodSchema = apikeyscalarwherewithaggregatesinputSchema;
