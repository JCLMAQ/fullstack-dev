import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneTypeSchema } from '../enums/PhoneType.schema';
import { NestedEnumPhoneTypeNullableFilterObjectSchema as NestedEnumPhoneTypeNullableFilterObjectSchema } from './NestedEnumPhoneTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: PhoneTypeSchema.optional().nullable(),
  in: PhoneTypeSchema.array().optional().nullable(),
  notIn: PhoneTypeSchema.array().optional().nullable(),
  not: z.union([PhoneTypeSchema, z.lazy(() => NestedEnumPhoneTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumPhoneTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumPhoneTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPhoneTypeNullableFilter>;
export const EnumPhoneTypeNullableFilterObjectZodSchema = makeSchema();
