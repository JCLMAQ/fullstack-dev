import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneTypeSchema } from '../enums/PhoneType.schema';
import { NestedEnumPhoneTypeNullableWithAggregatesFilterObjectSchema as NestedEnumPhoneTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumPhoneTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumPhoneTypeNullableFilterObjectSchema as NestedEnumPhoneTypeNullableFilterObjectSchema } from './NestedEnumPhoneTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: PhoneTypeSchema.optional().nullable(),
  in: PhoneTypeSchema.array().optional().nullable(),
  notIn: PhoneTypeSchema.array().optional().nullable(),
  not: z.union([PhoneTypeSchema, z.lazy(() => NestedEnumPhoneTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPhoneTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPhoneTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumPhoneTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPhoneTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPhoneTypeNullableWithAggregatesFilter>;
export const EnumPhoneTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
