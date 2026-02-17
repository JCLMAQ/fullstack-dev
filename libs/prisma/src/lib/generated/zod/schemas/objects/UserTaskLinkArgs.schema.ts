import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './UserTaskLinkSelect.schema';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './UserTaskLinkInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserTaskLinkSelectObjectSchema).optional(),
  include: z.lazy(() => UserTaskLinkIncludeObjectSchema).optional()
}).strict();
export const UserTaskLinkArgsObjectSchema = makeSchema();
export const UserTaskLinkArgsObjectZodSchema = makeSchema();
