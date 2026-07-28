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
  name: z.literal(true).optional(),
  position: z.literal(true).optional(),
  color: z.literal(true).optional(),
  tagCategoriesId: z.literal(true).optional(),
  mainTagId: z.literal(true).optional()
}).strict();
export const TagValueMaxAggregateInputObjectSchema: z.ZodType<Prisma.TagValueMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagValueMaxAggregateInputType>;
export const TagValueMaxAggregateInputObjectZodSchema = makeSchema();
