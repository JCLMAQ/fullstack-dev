import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PositionSchema } from '../enums/Position.schema';
import { NestedEnumPositionNullableWithAggregatesFilterObjectSchema as NestedEnumPositionNullableWithAggregatesFilterObjectSchema } from './NestedEnumPositionNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumPositionNullableFilterObjectSchema as NestedEnumPositionNullableFilterObjectSchema } from './NestedEnumPositionNullableFilter.schema'

const makeSchema = () => z.object({
  equals: PositionSchema.optional().nullable(),
  in: PositionSchema.array().optional().nullable(),
  notIn: PositionSchema.array().optional().nullable(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPositionNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPositionNullableFilterObjectSchema).optional()
}).strict();
export const EnumPositionNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPositionNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPositionNullableWithAggregatesFilter>;
export const EnumPositionNullableWithAggregatesFilterObjectZodSchema = makeSchema();
