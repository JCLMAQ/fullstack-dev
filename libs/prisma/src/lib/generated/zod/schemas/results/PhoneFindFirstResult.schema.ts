import * as z from 'zod';
export const PhoneFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  userId: z.string(),
  countryCode: z.string(),
  countryIso: z.string(),
  number: z.string(),
  extension: z.string().optional(),
  phoneType: z.unknown().optional(),
  isPrimary: z.boolean()
}));