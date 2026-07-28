import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ScopeFindManySchema as ScopeFindManySchema } from '../findManyScope.schema';
import { ApiKeyCountOutputTypeArgsObjectSchema as ApiKeyCountOutputTypeArgsObjectSchema } from './ApiKeyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  Scopes: z.union([z.boolean(), z.lazy(() => ScopeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ApiKeyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ApiKeyIncludeObjectSchema: z.ZodType<Prisma.ApiKeyInclude> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyInclude>;
export const ApiKeyIncludeObjectZodSchema = makeSchema();
