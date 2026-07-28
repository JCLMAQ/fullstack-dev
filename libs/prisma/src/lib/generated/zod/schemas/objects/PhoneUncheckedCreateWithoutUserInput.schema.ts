import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PhoneTypeSchema } from '../enums/PhoneType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  countryCode: z.string(),
  countryIso: z.string(),
  number: z.string(),
  extension: z.string().optional().nullable(),
  phoneType: PhoneTypeSchema.optional().nullable(),
  isPrimary: z.boolean().optional()
}).strict();
export const PhoneUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PhoneUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneUncheckedCreateWithoutUserInput>;
export const PhoneUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
