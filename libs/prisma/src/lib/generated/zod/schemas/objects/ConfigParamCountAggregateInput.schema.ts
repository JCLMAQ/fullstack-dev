import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  name: z.literal(true).optional(),
  value: z.literal(true).optional(),
  utility: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ConfigParamCountAggregateInputObjectSchema: z.ZodType<Prisma.ConfigParamCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamCountAggregateInputType>;
export const ConfigParamCountAggregateInputObjectZodSchema = makeSchema();
