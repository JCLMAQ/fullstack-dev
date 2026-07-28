import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ProfileCountOutputTypeCountUsersArgsObjectSchema as ProfileCountOutputTypeCountUsersArgsObjectSchema } from './ProfileCountOutputTypeCountUsersArgs.schema'

const makeSchema = () => z.object({
  Users: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountUsersArgsObjectSchema)]).optional()
}).strict();
export const ProfileCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProfileCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCountOutputTypeSelect>;
export const ProfileCountOutputTypeSelectObjectZodSchema = makeSchema();
