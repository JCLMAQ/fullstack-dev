import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  post_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserPostLikeLinkCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCountOrderByAggregateInput>;
export const UserPostLikeLinkCountOrderByAggregateInputObjectZodSchema = makeSchema();
