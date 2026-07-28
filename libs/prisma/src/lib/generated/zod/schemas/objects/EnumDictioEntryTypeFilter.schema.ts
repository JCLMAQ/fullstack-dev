import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema';
import { NestedEnumDictioEntryTypeFilterObjectSchema as NestedEnumDictioEntryTypeFilterObjectSchema } from './NestedEnumDictioEntryTypeFilter.schema'

const makeSchema = () => z.object({
  equals: DictioEntryTypeSchema.optional(),
  in: DictioEntryTypeSchema.array().optional(),
  notIn: DictioEntryTypeSchema.array().optional(),
  not: z.union([DictioEntryTypeSchema, z.lazy(() => NestedEnumDictioEntryTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumDictioEntryTypeFilterObjectSchema: z.ZodType<Prisma.EnumDictioEntryTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDictioEntryTypeFilter>;
export const EnumDictioEntryTypeFilterObjectZodSchema = makeSchema();
