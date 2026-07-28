import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ConfigParamSumAggregateInputObjectSchema: z.ZodType<Prisma.ConfigParamSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamSumAggregateInputType>;
export const ConfigParamSumAggregateInputObjectZodSchema = makeSchema();
