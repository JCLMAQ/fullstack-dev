import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './UserPostLikeLinkInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserPostLikeLinkSelectObjectSchema).optional(),
  include: z.lazy(() => UserPostLikeLinkIncludeObjectSchema).optional()
}).strict();
export const UserPostLikeLinkArgsObjectSchema = makeSchema();
export const UserPostLikeLinkArgsObjectZodSchema = makeSchema();
