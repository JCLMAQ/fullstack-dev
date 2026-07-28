import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ScopeFindManySchema as ScopeFindManySchema } from '../findManyScope.schema';
import { ApiKeyCountOutputTypeArgsObjectSchema as ApiKeyCountOutputTypeArgsObjectSchema } from './ApiKeyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  key: z.boolean().optional(),
  uuid: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  Scopes: z.union([z.boolean(), z.lazy(() => ScopeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ApiKeyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ApiKeySelectObjectSchema: z.ZodType<Prisma.ApiKeySelect> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeySelect>;
export const ApiKeySelectObjectZodSchema = makeSchema();
