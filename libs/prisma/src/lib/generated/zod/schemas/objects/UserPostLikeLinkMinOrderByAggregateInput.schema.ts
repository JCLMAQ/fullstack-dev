import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  post_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserPostLikeLinkMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkMinOrderByAggregateInput>;
export const UserPostLikeLinkMinOrderByAggregateInputObjectZodSchema = makeSchema();
