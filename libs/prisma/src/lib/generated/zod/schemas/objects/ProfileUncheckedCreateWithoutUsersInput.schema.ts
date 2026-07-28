import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderProfile: z.number().int(),
  bio: z.string()
}).strict();
export const ProfileUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateWithoutUsersInput>;
export const ProfileUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
