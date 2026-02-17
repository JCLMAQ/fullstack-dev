import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  isAuthor: SortOrderSchema.optional(),
  isAssigned: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserTaskLinkOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserTaskLinkOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkOrderByWithRelationInput>;
export const UserTaskLinkOrderByWithRelationInputObjectZodSchema = makeSchema();
