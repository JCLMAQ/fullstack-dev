import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  isAuthor: z.literal(true).optional(),
  isAssigned: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  comment: z.literal(true).optional()
}).strict();
export const UserTaskLinkMinAggregateInputObjectSchema: z.ZodType<Prisma.UserTaskLinkMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkMinAggregateInputType>;
export const UserTaskLinkMinAggregateInputObjectZodSchema = makeSchema();
