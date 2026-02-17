import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


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
export const ProfileCreateManyInputObjectSchema: z.ZodType<Prisma.ProfileCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateManyInput>;
export const ProfileCreateManyInputObjectZodSchema = makeSchema();
