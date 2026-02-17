import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numSeq: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  isValidated: z.literal(true).optional(),
  emailToken: z.literal(true).optional(),
  timeStamp: z.literal(true).optional()
}).strict();
export const AccountValidationMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountValidationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationMaxAggregateInputType>;
export const AccountValidationMaxAggregateInputObjectZodSchema = makeSchema();
