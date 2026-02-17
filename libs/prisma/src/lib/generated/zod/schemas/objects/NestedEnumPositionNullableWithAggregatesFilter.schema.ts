import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PositionSchema } from '../enums/Position.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumPositionNullableFilterObjectSchema as NestedEnumPositionNullableFilterObjectSchema } from './NestedEnumPositionNullableFilter.schema'

const nestedenumpositionnullablewithaggregatesfilterSchema = z.object({
  equals: PositionSchema.optional().nullable(),
  in: PositionSchema.array().optional().nullable(),
  notIn: PositionSchema.array().optional().nullable(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPositionNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPositionNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumPositionNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPositionNullableWithAggregatesFilter> = nestedenumpositionnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPositionNullableWithAggregatesFilter>;
export const NestedEnumPositionNullableWithAggregatesFilterObjectZodSchema = nestedenumpositionnullablewithaggregatesfilterSchema;
