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
  key: z.literal(true).optional(),
  uuid: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const ApiKeyMinAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyMinAggregateInputType>;
export const ApiKeyMinAggregateInputObjectZodSchema = makeSchema();
