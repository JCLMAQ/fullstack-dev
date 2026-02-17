import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  isAuthor: SortOrderSchema.optional(),
  isAssigned: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional()
}).strict();
export const UserTaskLinkMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserTaskLinkMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkMaxOrderByAggregateInput>;
export const UserTaskLinkMaxOrderByAggregateInputObjectZodSchema = makeSchema();
