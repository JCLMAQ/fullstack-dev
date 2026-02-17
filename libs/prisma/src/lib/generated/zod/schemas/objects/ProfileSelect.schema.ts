import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFindManySchema as UserFindManySchema } from '../findManyUser.schema';
import { ProfileCountOutputTypeArgsObjectSchema as ProfileCountOutputTypeArgsObjectSchema } from './ProfileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  orderProfile: z.boolean().optional(),
  Users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  bio: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProfileSelectObjectSchema: z.ZodType<Prisma.ProfileSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileSelect>;
export const ProfileSelectObjectZodSchema = makeSchema();
