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
  modelName: z.literal(true).optional(),
  description: z.literal(true).optional(),
  recordId: z.literal(true).optional()
}).strict();
export const TagCategoriesMaxAggregateInputObjectSchema: z.ZodType<Prisma.TagCategoriesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesMaxAggregateInputType>;
export const TagCategoriesMaxAggregateInputObjectZodSchema = makeSchema();
