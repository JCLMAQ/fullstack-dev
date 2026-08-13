import * as z from 'zod';
export const PhoneFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown().optional(),
  userId: z.string(),
  countryCode: z.string(),
  countryIso: z.string(),
  number: z.string(),
  extension: z.string().nullable().optional(),
  phoneType: z.unknown().nullable().optional(),
  isPrimary: z.boolean()
}));