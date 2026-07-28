import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const AccountValidationSumAggregateInputObjectSchema: z.ZodType<Prisma.AccountValidationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationSumAggregateInputType>;
export const AccountValidationSumAggregateInputObjectZodSchema = makeSchema();
