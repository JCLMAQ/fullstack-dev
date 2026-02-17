import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TokenTypeSchema } from '../enums/TokenType.schema';
import { NestedEnumTokenTypeFilterObjectSchema as NestedEnumTokenTypeFilterObjectSchema } from './NestedEnumTokenTypeFilter.schema'

const makeSchema = () => z.object({
  equals: TokenTypeSchema.optional(),
  in: TokenTypeSchema.array().optional(),
  notIn: TokenTypeSchema.array().optional(),
  not: z.union([TokenTypeSchema, z.lazy(() => NestedEnumTokenTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumTokenTypeFilterObjectSchema: z.ZodType<Prisma.EnumTokenTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTokenTypeFilter>;
export const EnumTokenTypeFilterObjectZodSchema = makeSchema();
