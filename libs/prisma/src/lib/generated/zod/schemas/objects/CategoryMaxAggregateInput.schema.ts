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
  orderCategory: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const CategoryMaxAggregateInputObjectSchema: z.ZodType<Prisma.CategoryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoryMaxAggregateInputType>;
export const CategoryMaxAggregateInputObjectZodSchema = makeSchema();
