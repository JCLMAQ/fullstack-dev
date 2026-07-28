import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDictioEntryTypeFilterObjectSchema as NestedEnumDictioEntryTypeFilterObjectSchema } from './NestedEnumDictioEntryTypeFilter.schema'

const nestedenumdictioentrytypewithaggregatesfilterSchema = z.object({
  equals: DictioEntryTypeSchema.optional(),
  in: DictioEntryTypeSchema.array().optional(),
  notIn: DictioEntryTypeSchema.array().optional(),
  not: z.union([DictioEntryTypeSchema, z.lazy(() => NestedEnumDictioEntryTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDictioEntryTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDictioEntryTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumDictioEntryTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDictioEntryTypeWithAggregatesFilter> = nestedenumdictioentrytypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDictioEntryTypeWithAggregatesFilter>;
export const NestedEnumDictioEntryTypeWithAggregatesFilterObjectZodSchema = nestedenumdictioentrytypewithaggregatesfilterSchema;
