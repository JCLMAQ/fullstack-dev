import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  countryCode: z.literal(true).optional(),
  countryIso: z.literal(true).optional(),
  number: z.literal(true).optional(),
  extension: z.literal(true).optional(),
  phoneType: z.literal(true).optional(),
  isPrimary: z.literal(true).optional()
}).strict();
export const PhoneMaxAggregateInputObjectSchema: z.ZodType<Prisma.PhoneMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PhoneMaxAggregateInputType>;
export const PhoneMaxAggregateInputObjectZodSchema = makeSchema();
