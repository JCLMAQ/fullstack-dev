import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneTypeSchema } from '../enums/PhoneType.schema'

const nestedenumphonetypenullablefilterSchema = z.object({
  equals: PhoneTypeSchema.optional().nullable(),
  in: PhoneTypeSchema.array().optional().nullable(),
  notIn: PhoneTypeSchema.array().optional().nullable(),
  not: z.union([PhoneTypeSchema, z.lazy(() => NestedEnumPhoneTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumPhoneTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumPhoneTypeNullableFilter> = nestedenumphonetypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumPhoneTypeNullableFilter>;
export const NestedEnumPhoneTypeNullableFilterObjectZodSchema = nestedenumphonetypenullablefilterSchema;
