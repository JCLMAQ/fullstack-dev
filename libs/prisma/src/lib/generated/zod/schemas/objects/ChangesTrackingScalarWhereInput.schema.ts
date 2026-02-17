import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema'

const changestrackingscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema), z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema), z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  doneAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  modifiedById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  modelName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  recordId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  operation: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  newData: z.lazy(() => JsonFilterObjectSchema).optional(),
  oldData: z.lazy(() => JsonFilterObjectSchema).optional()
}).strict();
export const ChangesTrackingScalarWhereInputObjectSchema: z.ZodType<Prisma.ChangesTrackingScalarWhereInput> = changestrackingscalarwhereinputSchema as unknown as z.ZodType<Prisma.ChangesTrackingScalarWhereInput>;
export const ChangesTrackingScalarWhereInputObjectZodSchema = changestrackingscalarwhereinputSchema;
