import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { AddressTypeSchema } from '../enums/AddressType.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  street: z.string(),
  buildingNum: z.string(),
  aptNum: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
  countryIso: z.string(),
  addressType: AddressTypeSchema.optional().nullable(),
  isPrimary: z.boolean().optional()
}).strict();
export const AddressCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AddressCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressCreateWithoutUserInput>;
export const AddressCreateWithoutUserInputObjectZodSchema = makeSchema();
