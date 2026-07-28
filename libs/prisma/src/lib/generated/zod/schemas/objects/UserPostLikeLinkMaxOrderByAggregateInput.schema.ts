import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  post_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserPostLikeLinkMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkMaxOrderByAggregateInput>;
export const UserPostLikeLinkMaxOrderByAggregateInputObjectZodSchema = makeSchema();
