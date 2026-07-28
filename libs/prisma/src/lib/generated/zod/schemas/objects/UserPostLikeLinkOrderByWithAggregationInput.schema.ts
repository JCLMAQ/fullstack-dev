import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserPostLikeLinkCountOrderByAggregateInputObjectSchema as UserPostLikeLinkCountOrderByAggregateInputObjectSchema } from './UserPostLikeLinkCountOrderByAggregateInput.schema';
import { UserPostLikeLinkMaxOrderByAggregateInputObjectSchema as UserPostLikeLinkMaxOrderByAggregateInputObjectSchema } from './UserPostLikeLinkMaxOrderByAggregateInput.schema';
import { UserPostLikeLinkMinOrderByAggregateInputObjectSchema as UserPostLikeLinkMinOrderByAggregateInputObjectSchema } from './UserPostLikeLinkMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  post_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => UserPostLikeLinkCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserPostLikeLinkMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserPostLikeLinkMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserPostLikeLinkOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkOrderByWithAggregationInput>;
export const UserPostLikeLinkOrderByWithAggregationInputObjectZodSchema = makeSchema();
