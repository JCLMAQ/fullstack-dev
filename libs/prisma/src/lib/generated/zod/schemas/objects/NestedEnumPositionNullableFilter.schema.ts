import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PositionSchema } from '../enums/Position.schema'

const nestedenumpositionnullablefilterSchema = z.object({
  equals: PositionSchema.optional().nullable(),
  in: PositionSchema.array().optional().nullable(),
  notIn: PositionSchema.array().optional().nullable(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumPositionNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumPositionNullableFilter> = nestedenumpositionnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumPositionNullableFilter>;
export const NestedEnumPositionNullableFilterObjectZodSchema = nestedenumpositionnullablefilterSchema;
