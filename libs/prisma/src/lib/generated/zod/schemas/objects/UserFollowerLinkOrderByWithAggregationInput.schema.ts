import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserFollowerLinkCountOrderByAggregateInputObjectSchema as UserFollowerLinkCountOrderByAggregateInputObjectSchema } from './UserFollowerLinkCountOrderByAggregateInput.schema';
import { UserFollowerLinkMaxOrderByAggregateInputObjectSchema as UserFollowerLinkMaxOrderByAggregateInputObjectSchema } from './UserFollowerLinkMaxOrderByAggregateInput.schema';
import { UserFollowerLinkMinOrderByAggregateInputObjectSchema as UserFollowerLinkMinOrderByAggregateInputObjectSchema } from './UserFollowerLinkMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  follower_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => UserFollowerLinkCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserFollowerLinkMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserFollowerLinkMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserFollowerLinkOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkOrderByWithAggregationInput>;
export const UserFollowerLinkOrderByWithAggregationInputObjectZodSchema = makeSchema();
