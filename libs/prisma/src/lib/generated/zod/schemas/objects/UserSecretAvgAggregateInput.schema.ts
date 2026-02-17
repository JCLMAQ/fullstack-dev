import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const UserSecretAvgAggregateInputObjectSchema: z.ZodType<Prisma.UserSecretAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretAvgAggregateInputType>;
export const UserSecretAvgAggregateInputObjectZodSchema = makeSchema();
