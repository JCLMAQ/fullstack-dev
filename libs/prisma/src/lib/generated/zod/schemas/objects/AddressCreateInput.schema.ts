import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { AddressTypeSchema } from '../enums/AddressType.schema';
import { UserCreateNestedOneWithoutAddressInputObjectSchema as UserCreateNestedOneWithoutAddressInputObjectSchema } from './UserCreateNestedOneWithoutAddressInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  street: z.string(),
  buildingNum: z.string(),
  aptNum: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
  countryIso: z.string(),
  addressType: AddressTypeSchema.optional().nullable(),
  isPrimary: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAddressInputObjectSchema)
}).strict();
export const AddressCreateInputObjectSchema: z.ZodType<Prisma.AddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateInput>;
export const AddressCreateInputObjectZodSchema = makeSchema();
