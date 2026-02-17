import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAddressTypeNullableWithAggregatesFilterObjectSchema as EnumAddressTypeNullableWithAggregatesFilterObjectSchema } from './EnumAddressTypeNullableWithAggregatesFilter.schema';
import { AddressTypeSchema } from '../enums/AddressType.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const addressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  street: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  buildingNum: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  aptNum: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  city: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  zipCode: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  countryIso: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  addressType: z.union([z.lazy(() => EnumAddressTypeNullableWithAggregatesFilterObjectSchema), AddressTypeSchema]).optional().nullable(),
  isPrimary: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const AddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput> = addressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput>;
export const AddressScalarWhereWithAggregatesInputObjectZodSchema = addressscalarwherewithaggregatesinputSchema;
