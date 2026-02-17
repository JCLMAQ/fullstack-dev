import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const refreshtokenwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RefreshTokenWhereInputObjectSchema), z.lazy(() => RefreshTokenWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RefreshTokenWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RefreshTokenWhereInputObjectSchema), z.lazy(() => RefreshTokenWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tokenId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const RefreshTokenWhereInputObjectSchema: z.ZodType<Prisma.RefreshTokenWhereInput> = refreshtokenwhereinputSchema as unknown as z.ZodType<Prisma.RefreshTokenWhereInput>;
export const RefreshTokenWhereInputObjectZodSchema = refreshtokenwhereinputSchema;
