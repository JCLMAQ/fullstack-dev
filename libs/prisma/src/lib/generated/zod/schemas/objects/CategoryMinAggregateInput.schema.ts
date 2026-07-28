import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


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
export const CategoryMinAggregateInputObjectSchema: z.ZodType<Prisma.CategoryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CategoryMinAggregateInputType>;
export const CategoryMinAggregateInputObjectZodSchema = makeSchema();
