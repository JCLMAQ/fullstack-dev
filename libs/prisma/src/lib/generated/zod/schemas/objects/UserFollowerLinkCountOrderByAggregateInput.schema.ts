import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  follower_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserFollowerLinkCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCountOrderByAggregateInput>;
export const UserFollowerLinkCountOrderByAggregateInputObjectZodSchema = makeSchema();
