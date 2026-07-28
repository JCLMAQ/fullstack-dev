import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
export const UserTaskLinkCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCountOrderByAggregateInput>;
export const UserTaskLinkCountOrderByAggregateInputObjectZodSchema = makeSchema();
