import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema'

const makeSchema = () => z.object({
  user_id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  post_id: z.boolean().optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const UserPostLikeLinkSelectObjectSchema: z.ZodType<Prisma.UserPostLikeLinkSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkSelect>;
export const UserPostLikeLinkSelectObjectZodSchema = makeSchema();
