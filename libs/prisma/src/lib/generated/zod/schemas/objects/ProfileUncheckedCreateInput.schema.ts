import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUncheckedCreateNestedManyWithoutProfilesInputObjectSchema as UserUncheckedCreateNestedManyWithoutProfilesInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutProfilesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderProfile: z.number().int(),
  bio: z.string(),
  Users: z.lazy(() => UserUncheckedCreateNestedManyWithoutProfilesInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateInput>;
export const ProfileUncheckedCreateInputObjectZodSchema = makeSchema();
