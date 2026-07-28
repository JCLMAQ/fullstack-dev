import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


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
  isPrimary: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const PhoneCountAggregateInputObjectSchema: z.ZodType<Prisma.PhoneCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PhoneCountAggregateInputType>;
export const PhoneCountAggregateInputObjectZodSchema = makeSchema();
