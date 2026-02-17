import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AddressTypeSchema } from '../enums/AddressType.schema'

const nestedenumaddresstypenullablefilterSchema = z.object({
  equals: AddressTypeSchema.optional().nullable(),
  in: AddressTypeSchema.array().optional().nullable(),
  notIn: AddressTypeSchema.array().optional().nullable(),
  not: z.union([AddressTypeSchema, z.lazy(() => NestedEnumAddressTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumAddressTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumAddressTypeNullableFilter> = nestedenumaddresstypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAddressTypeNullableFilter>;
export const NestedEnumAddressTypeNullableFilterObjectZodSchema = nestedenumaddresstypenullablefilterSchema;
