import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './UserFollowerLinkSelect.schema';
import { UserFollowerLinkIncludeObjectSchema as UserFollowerLinkIncludeObjectSchema } from './UserFollowerLinkInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserFollowerLinkSelectObjectSchema).optional(),
  include: z.lazy(() => UserFollowerLinkIncludeObjectSchema).optional()
}).strict();
export const UserFollowerLinkArgsObjectSchema = makeSchema();
export const UserFollowerLinkArgsObjectZodSchema = makeSchema();
