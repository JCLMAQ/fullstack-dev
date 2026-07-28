import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { AddressTypeSchema } from '../enums/AddressType.schema';
import { NestedEnumAddressTypeNullableWithAggregatesFilterObjectSchema as NestedEnumAddressTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumAddressTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumAddressTypeNullableFilterObjectSchema as NestedEnumAddressTypeNullableFilterObjectSchema } from './NestedEnumAddressTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: AddressTypeSchema.optional().nullable(),
  in: AddressTypeSchema.array().optional().nullable(),
  notIn: AddressTypeSchema.array().optional().nullable(),
  not: z.union([AddressTypeSchema, z.lazy(() => NestedEnumAddressTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAddressTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAddressTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumAddressTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAddressTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAddressTypeNullableWithAggregatesFilter>;
export const EnumAddressTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
