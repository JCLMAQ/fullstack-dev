import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TokenTypeSchema } from '../enums/TokenType.schema'

const nestedenumtokentypefilterSchema = z.object({
  equals: TokenTypeSchema.optional(),
  in: TokenTypeSchema.array().optional(),
  notIn: TokenTypeSchema.array().optional(),
  not: z.union([TokenTypeSchema, z.lazy(() => NestedEnumTokenTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTokenTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumTokenTypeFilter> = nestedenumtokentypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumTokenTypeFilter>;
export const NestedEnumTokenTypeFilterObjectZodSchema = nestedenumtokentypefilterSchema;
