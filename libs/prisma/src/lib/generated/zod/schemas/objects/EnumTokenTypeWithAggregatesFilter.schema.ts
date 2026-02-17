import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TokenTypeSchema } from '../enums/TokenType.schema';
import { NestedEnumTokenTypeWithAggregatesFilterObjectSchema as NestedEnumTokenTypeWithAggregatesFilterObjectSchema } from './NestedEnumTokenTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTokenTypeFilterObjectSchema as NestedEnumTokenTypeFilterObjectSchema } from './NestedEnumTokenTypeFilter.schema'

const makeSchema = () => z.object({
  equals: TokenTypeSchema.optional(),
  in: TokenTypeSchema.array().optional(),
  notIn: TokenTypeSchema.array().optional(),
  not: z.union([TokenTypeSchema, z.lazy(() => NestedEnumTokenTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTokenTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTokenTypeFilterObjectSchema).optional()
}).strict();
export const EnumTokenTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTokenTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTokenTypeWithAggregatesFilter>;
export const EnumTokenTypeWithAggregatesFilterObjectZodSchema = makeSchema();
