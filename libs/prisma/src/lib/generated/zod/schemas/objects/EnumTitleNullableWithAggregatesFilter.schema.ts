import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TitleSchema } from '../enums/Title.schema';
import { NestedEnumTitleNullableWithAggregatesFilterObjectSchema as NestedEnumTitleNullableWithAggregatesFilterObjectSchema } from './NestedEnumTitleNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumTitleNullableFilterObjectSchema as NestedEnumTitleNullableFilterObjectSchema } from './NestedEnumTitleNullableFilter.schema'

const makeSchema = () => z.object({
  equals: TitleSchema.optional().nullable(),
  in: TitleSchema.array().optional().nullable(),
  notIn: TitleSchema.array().optional().nullable(),
  not: z.union([TitleSchema, z.lazy(() => NestedEnumTitleNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTitleNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTitleNullableFilterObjectSchema).optional()
}).strict();
export const EnumTitleNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTitleNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTitleNullableWithAggregatesFilter>;
export const EnumTitleNullableWithAggregatesFilterObjectZodSchema = makeSchema();
