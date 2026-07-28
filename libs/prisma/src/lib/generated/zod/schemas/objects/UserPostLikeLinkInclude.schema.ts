import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional()
}).strict();
export const UserPostLikeLinkIncludeObjectSchema: z.ZodType<Prisma.UserPostLikeLinkInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkInclude>;
export const UserPostLikeLinkIncludeObjectZodSchema = makeSchema();
