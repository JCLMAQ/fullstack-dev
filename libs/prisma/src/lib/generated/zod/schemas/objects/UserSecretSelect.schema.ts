import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  pwdHash: z.boolean().optional(),
  salt: z.boolean().optional(),
  isAdmin: z.boolean().optional()
}).strict();
export const UserSecretSelectObjectSchema: z.ZodType<Prisma.UserSecretSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretSelect>;
export const UserSecretSelectObjectZodSchema = makeSchema();
