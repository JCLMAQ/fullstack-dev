import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PositionSchema } from '../enums/Position.schema';
import { NestedEnumPositionNullableFilterObjectSchema as NestedEnumPositionNullableFilterObjectSchema } from './NestedEnumPositionNullableFilter.schema'

const makeSchema = () => z.object({
  equals: PositionSchema.optional().nullable(),
  in: PositionSchema.array().optional().nullable(),
  notIn: PositionSchema.array().optional().nullable(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumPositionNullableFilterObjectSchema: z.ZodType<Prisma.EnumPositionNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPositionNullableFilter>;
export const EnumPositionNullableFilterObjectZodSchema = makeSchema();
