import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  follower_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserFollowerLinkMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkMinOrderByAggregateInput>;
export const UserFollowerLinkMinOrderByAggregateInputObjectZodSchema = makeSchema();
