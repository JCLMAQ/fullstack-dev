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
  email: z.literal(true).optional(),
  description: z.literal(true).optional(),
  orgId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrgEmailCountAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailCountAggregateInputType>;
export const OrgEmailCountAggregateInputObjectZodSchema = makeSchema();
