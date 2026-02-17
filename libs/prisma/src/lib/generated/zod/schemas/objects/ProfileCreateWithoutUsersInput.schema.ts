import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderProfile: z.number().int(),
  bio: z.string()
}).strict();
export const ProfileCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateWithoutUsersInput>;
export const ProfileCreateWithoutUsersInputObjectZodSchema = makeSchema();
