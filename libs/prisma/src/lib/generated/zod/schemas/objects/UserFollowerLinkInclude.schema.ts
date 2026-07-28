import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  follower: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const UserFollowerLinkIncludeObjectSchema: z.ZodType<Prisma.UserFollowerLinkInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkInclude>;
export const UserFollowerLinkIncludeObjectZodSchema = makeSchema();
