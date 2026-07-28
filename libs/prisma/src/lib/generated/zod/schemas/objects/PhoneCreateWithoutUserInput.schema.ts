import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PhoneTypeSchema } from '../enums/PhoneType.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  countryCode: z.string(),
  countryIso: z.string(),
  number: z.string(),
  extension: z.string().optional().nullable(),
  phoneType: PhoneTypeSchema.optional().nullable(),
  isPrimary: z.boolean().optional()
}).strict();
export const PhoneCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PhoneCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneCreateWithoutUserInput>;
export const PhoneCreateWithoutUserInputObjectZodSchema = makeSchema();
