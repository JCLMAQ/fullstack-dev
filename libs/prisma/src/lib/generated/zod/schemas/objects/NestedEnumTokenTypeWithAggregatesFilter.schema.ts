import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TokenTypeSchema } from '../enums/TokenType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTokenTypeFilterObjectSchema as NestedEnumTokenTypeFilterObjectSchema } from './NestedEnumTokenTypeFilter.schema'

const nestedenumtokentypewithaggregatesfilterSchema = z.object({
  equals: TokenTypeSchema.optional(),
  in: TokenTypeSchema.array().optional(),
  notIn: TokenTypeSchema.array().optional(),
  not: z.union([TokenTypeSchema, z.lazy(() => NestedEnumTokenTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTokenTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTokenTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumTokenTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTokenTypeWithAggregatesFilter> = nestedenumtokentypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTokenTypeWithAggregatesFilter>;
export const NestedEnumTokenTypeWithAggregatesFilterObjectZodSchema = nestedenumtokentypewithaggregatesfilterSchema;
