import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const UserSecretSumAggregateInputObjectSchema: z.ZodType<Prisma.UserSecretSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretSumAggregateInputType>;
export const UserSecretSumAggregateInputObjectZodSchema = makeSchema();
