import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user_id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  follower_id: z.boolean().optional(),
  follower: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const UserFollowerLinkSelectObjectSchema: z.ZodType<Prisma.UserFollowerLinkSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkSelect>;
export const UserFollowerLinkSelectObjectZodSchema = makeSchema();
