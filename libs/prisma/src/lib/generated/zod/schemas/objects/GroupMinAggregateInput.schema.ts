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
  orderGroup: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  ownerId: z.literal(true).optional(),
  isActiv: z.literal(true).optional(),
  orgId: z.literal(true).optional()
}).strict();
export const GroupMinAggregateInputObjectSchema: z.ZodType<Prisma.GroupMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupMinAggregateInputType>;
export const GroupMinAggregateInputObjectZodSchema = makeSchema();
