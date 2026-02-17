import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional(),
  follower_id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  follower: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserFollowerLinkOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkOrderByWithRelationInput>;
export const UserFollowerLinkOrderByWithRelationInputObjectZodSchema = makeSchema();
