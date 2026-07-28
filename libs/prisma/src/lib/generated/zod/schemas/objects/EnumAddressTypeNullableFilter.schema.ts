import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { AddressTypeSchema } from '../enums/AddressType.schema';
import { NestedEnumAddressTypeNullableFilterObjectSchema as NestedEnumAddressTypeNullableFilterObjectSchema } from './NestedEnumAddressTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: AddressTypeSchema.optional().nullable(),
  in: AddressTypeSchema.array().optional().nullable(),
  notIn: AddressTypeSchema.array().optional().nullable(),
  not: z.union([AddressTypeSchema, z.lazy(() => NestedEnumAddressTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumAddressTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumAddressTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAddressTypeNullableFilter>;
export const EnumAddressTypeNullableFilterObjectZodSchema = makeSchema();
