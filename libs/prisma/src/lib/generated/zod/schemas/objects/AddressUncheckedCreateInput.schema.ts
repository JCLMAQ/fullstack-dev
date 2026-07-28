import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { AddressTypeSchema } from '../enums/AddressType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
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
export const AddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUncheckedCreateInput>;
export const AddressUncheckedCreateInputObjectZodSchema = makeSchema();
