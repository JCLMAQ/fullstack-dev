import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  tokenId: z.boolean().optional(),
  type: z.boolean().optional(),
  emailToken: z.boolean().optional(),
  valid: z.boolean().optional(),
  expiration: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional()
}).strict();
export const TokenSelectObjectSchema: z.ZodType<Prisma.TokenSelect> = makeSchema() as unknown as z.ZodType<Prisma.TokenSelect>;
export const TokenSelectObjectZodSchema = makeSchema();
