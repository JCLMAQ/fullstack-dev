import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './PostOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  post_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  post: z.lazy(() => PostOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserPostLikeLinkOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkOrderByWithRelationInput>;
export const UserPostLikeLinkOrderByWithRelationInputObjectZodSchema = makeSchema();
