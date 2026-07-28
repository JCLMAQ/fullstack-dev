import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TitleSchema } from '../enums/Title.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumTitleNullableFilterObjectSchema as NestedEnumTitleNullableFilterObjectSchema } from './NestedEnumTitleNullableFilter.schema'

const nestedenumtitlenullablewithaggregatesfilterSchema = z.object({
  equals: TitleSchema.optional().nullable(),
  in: TitleSchema.array().optional().nullable(),
  notIn: TitleSchema.array().optional().nullable(),
  not: z.union([TitleSchema, z.lazy(() => NestedEnumTitleNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTitleNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTitleNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumTitleNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTitleNullableWithAggregatesFilter> = nestedenumtitlenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTitleNullableWithAggregatesFilter>;
export const NestedEnumTitleNullableWithAggregatesFilterObjectZodSchema = nestedenumtitlenullablewithaggregatesfilterSchema;
