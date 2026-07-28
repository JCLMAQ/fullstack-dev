import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const apikeyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiKeyScalarWhereInputObjectSchema), z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiKeyScalarWhereInputObjectSchema), z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ApiKeyScalarWhereInputObjectSchema: z.ZodType<Prisma.ApiKeyScalarWhereInput> = apikeyscalarwhereinputSchema as unknown as z.ZodType<Prisma.ApiKeyScalarWhereInput>;
export const ApiKeyScalarWhereInputObjectZodSchema = apikeyscalarwhereinputSchema;
