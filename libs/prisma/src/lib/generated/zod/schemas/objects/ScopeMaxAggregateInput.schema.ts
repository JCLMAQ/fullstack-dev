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
  scope: z.literal(true).optional()
}).strict();
export const ScopeMaxAggregateInputObjectSchema: z.ZodType<Prisma.ScopeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ScopeMaxAggregateInputType>;
export const ScopeMaxAggregateInputObjectZodSchema = makeSchema();
