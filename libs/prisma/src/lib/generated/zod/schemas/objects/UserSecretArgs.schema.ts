import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './UserSecretSelect.schema';
import { UserSecretIncludeObjectSchema as UserSecretIncludeObjectSchema } from './UserSecretInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserSecretSelectObjectSchema).optional(),
  include: z.lazy(() => UserSecretIncludeObjectSchema).optional()
}).strict();
export const UserSecretArgsObjectSchema = makeSchema();
export const UserSecretArgsObjectZodSchema = makeSchema();
