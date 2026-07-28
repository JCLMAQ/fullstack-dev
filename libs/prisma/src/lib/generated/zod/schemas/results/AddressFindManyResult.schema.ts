import * as z from 'zod';
export const AddressFindManyResultSchema = z.object({
  data: z.array(z.object({
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
  addressType: z.unknown().optional(),
  isPrimary: z.boolean()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});