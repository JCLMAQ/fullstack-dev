import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPhoneTypeNullableFilterObjectSchema as EnumPhoneTypeNullableFilterObjectSchema } from './EnumPhoneTypeNullableFilter.schema';
import { PhoneTypeSchema } from '../enums/PhoneType.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const phonescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PhoneScalarWhereInputObjectSchema), z.lazy(() => PhoneScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PhoneScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PhoneScalarWhereInputObjectSchema), z.lazy(() => PhoneScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  countryCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  countryIso: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  number: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  extension: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  phoneType: z.union([z.lazy(() => EnumPhoneTypeNullableFilterObjectSchema), PhoneTypeSchema]).optional().nullable(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const PhoneScalarWhereInputObjectSchema: z.ZodType<Prisma.PhoneScalarWhereInput> = phonescalarwhereinputSchema as unknown as z.ZodType<Prisma.PhoneScalarWhereInput>;
export const PhoneScalarWhereInputObjectZodSchema = phonescalarwhereinputSchema;
