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
  position: z.literal(true).optional(),
  tagCategoriesId: z.literal(true).optional(),
  mainTagId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TagValueCountAggregateInputObjectSchema: z.ZodType<Prisma.TagValueCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCountAggregateInputType>;
export const TagValueCountAggregateInputObjectZodSchema = makeSchema();
