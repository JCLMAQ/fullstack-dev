import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedManyWithoutProfilesInputObjectSchema as UserCreateNestedManyWithoutProfilesInputObjectSchema } from './UserCreateNestedManyWithoutProfilesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderProfile: z.number().int(),
  bio: z.string(),
  Users: z.lazy(() => UserCreateNestedManyWithoutProfilesInputObjectSchema).optional()
}).strict();
export const ProfileCreateInputObjectSchema: z.ZodType<Prisma.ProfileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateInput>;
export const ProfileCreateInputObjectZodSchema = makeSchema();
