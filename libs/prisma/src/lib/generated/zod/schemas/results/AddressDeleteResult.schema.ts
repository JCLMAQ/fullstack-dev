import * as z from 'zod';
export const AddressDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown().optional(),
  userId: z.string(),
  street: z.string(),
  buildingNum: z.string(),
  aptNum: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
  countryIso: z.string(),
  addressType: z.unknown().nullable().optional(),
  isPrimary: z.boolean()
}));