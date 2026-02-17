import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { ProfileCountOutputTypeArgsObjectSchema as ProfileCountOutputTypeArgsObjectSchema } from './ProfileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProfileIncludeObjectSchema: z.ZodType<Prisma.ProfileInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProfileInclude>;
export const ProfileIncludeObjectZodSchema = makeSchema();
