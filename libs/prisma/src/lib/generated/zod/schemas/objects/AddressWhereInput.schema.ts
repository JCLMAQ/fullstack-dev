import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAddressTypeNullableFilterObjectSchema as EnumAddressTypeNullableFilterObjectSchema } from './EnumAddressTypeNullableFilter.schema';
import { AddressTypeSchema } from '../enums/AddressType.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const addresswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AddressWhereInputObjectSchema), z.lazy(() => AddressWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AddressWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AddressWhereInputObjectSchema), z.lazy(() => AddressWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  street: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  buildingNum: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  aptNum: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  state: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  zipCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  countryIso: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressType: z.union([z.lazy(() => EnumAddressTypeNullableFilterObjectSchema), AddressTypeSchema]).optional().nullable(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AddressWhereInputObjectSchema: z.ZodType<Prisma.AddressWhereInput> = addresswhereinputSchema as unknown as z.ZodType<Prisma.AddressWhereInput>;
export const AddressWhereInputObjectZodSchema = addresswhereinputSchema;
