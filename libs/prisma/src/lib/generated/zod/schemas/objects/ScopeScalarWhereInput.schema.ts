import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const scopescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScopeScalarWhereInputObjectSchema), z.lazy(() => ScopeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScopeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScopeScalarWhereInputObjectSchema), z.lazy(() => ScopeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ScopeScalarWhereInputObjectSchema: z.ZodType<Prisma.ScopeScalarWhereInput> = scopescalarwhereinputSchema as unknown as z.ZodType<Prisma.ScopeScalarWhereInput>;
export const ScopeScalarWhereInputObjectZodSchema = scopescalarwhereinputSchema;
