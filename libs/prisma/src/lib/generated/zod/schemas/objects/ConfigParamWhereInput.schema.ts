import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const configparamwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ConfigParamWhereInputObjectSchema), z.lazy(() => ConfigParamWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ConfigParamWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ConfigParamWhereInputObjectSchema), z.lazy(() => ConfigParamWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  utility: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ConfigParamWhereInputObjectSchema: z.ZodType<Prisma.ConfigParamWhereInput> = configparamwhereinputSchema as unknown as z.ZodType<Prisma.ConfigParamWhereInput>;
export const ConfigParamWhereInputObjectZodSchema = configparamwhereinputSchema;
