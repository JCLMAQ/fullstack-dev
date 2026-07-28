import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PhoneTypeSchema } from '../enums/PhoneType.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumPhoneTypeNullableFilterObjectSchema as NestedEnumPhoneTypeNullableFilterObjectSchema } from './NestedEnumPhoneTypeNullableFilter.schema'

const nestedenumphonetypenullablewithaggregatesfilterSchema = z.object({
  equals: PhoneTypeSchema.optional().nullable(),
  in: PhoneTypeSchema.array().optional().nullable(),
  notIn: PhoneTypeSchema.array().optional().nullable(),
  not: z.union([PhoneTypeSchema, z.lazy(() => NestedEnumPhoneTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPhoneTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPhoneTypeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumPhoneTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPhoneTypeNullableWithAggregatesFilter> = nestedenumphonetypenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPhoneTypeNullableWithAggregatesFilter>;
export const NestedEnumPhoneTypeNullableWithAggregatesFilterObjectZodSchema = nestedenumphonetypenullablewithaggregatesfilterSchema;
