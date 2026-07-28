import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { DictioEntryTypeSchema } from '../enums/DictioEntryType.schema'

const nestedenumdictioentrytypefilterSchema = z.object({
  equals: DictioEntryTypeSchema.optional(),
  in: DictioEntryTypeSchema.array().optional(),
  notIn: DictioEntryTypeSchema.array().optional(),
  not: z.union([DictioEntryTypeSchema, z.lazy(() => NestedEnumDictioEntryTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDictioEntryTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumDictioEntryTypeFilter> = nestedenumdictioentrytypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumDictioEntryTypeFilter>;
export const NestedEnumDictioEntryTypeFilterObjectZodSchema = nestedenumdictioentrytypefilterSchema;
