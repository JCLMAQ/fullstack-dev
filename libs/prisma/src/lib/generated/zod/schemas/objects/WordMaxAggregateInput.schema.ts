import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  type: z.literal(true).optional()
}).strict();
export const WordMaxAggregateInputObjectSchema: z.ZodType<Prisma.WordMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WordMaxAggregateInputType>;
export const WordMaxAggregateInputObjectZodSchema = makeSchema();
