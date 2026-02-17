import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneTypeSchema } from '../enums/PhoneType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  countryCode: z.string(),
  countryIso: z.string(),
  number: z.string(),
  extension: z.string().optional().nullable(),
  phoneType: PhoneTypeSchema.optional().nullable(),
  isPrimary: z.boolean().optional()
}).strict();
export const PhoneUncheckedCreateInputObjectSchema: z.ZodType<Prisma.PhoneUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneUncheckedCreateInput>;
export const PhoneUncheckedCreateInputObjectZodSchema = makeSchema();
