import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumPhoneTypeNullableWithAggregatesFilterObjectSchema as EnumPhoneTypeNullableWithAggregatesFilterObjectSchema } from './EnumPhoneTypeNullableWithAggregatesFilter.schema';
import { PhoneTypeSchema } from '../enums/PhoneType.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const phonescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PhoneScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PhoneScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PhoneScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PhoneScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PhoneScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  countryCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  countryIso: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  number: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  extension: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  phoneType: z.union([z.lazy(() => EnumPhoneTypeNullableWithAggregatesFilterObjectSchema), PhoneTypeSchema]).optional().nullable(),
  isPrimary: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const PhoneScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PhoneScalarWhereWithAggregatesInput> = phonescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PhoneScalarWhereWithAggregatesInput>;
export const PhoneScalarWhereWithAggregatesInputObjectZodSchema = phonescalarwherewithaggregatesinputSchema;
