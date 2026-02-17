import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ConfigParamAvgAggregateInputObjectSchema: z.ZodType<Prisma.ConfigParamAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamAvgAggregateInputType>;
export const ConfigParamAvgAggregateInputObjectZodSchema = makeSchema();
