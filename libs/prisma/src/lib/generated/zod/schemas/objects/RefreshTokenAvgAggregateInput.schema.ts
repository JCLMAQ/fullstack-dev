import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const RefreshTokenAvgAggregateInputObjectSchema: z.ZodType<Prisma.RefreshTokenAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenAvgAggregateInputType>;
export const RefreshTokenAvgAggregateInputObjectZodSchema = makeSchema();
