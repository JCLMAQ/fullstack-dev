import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const AccountValidationAvgAggregateInputObjectSchema: z.ZodType<Prisma.AccountValidationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationAvgAggregateInputType>;
export const AccountValidationAvgAggregateInputObjectZodSchema = makeSchema();
