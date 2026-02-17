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
  orderGroup: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  isActiv: z.coerce.date().optional().nullable()
}).strict();
export const GroupCreateManyOrgInputObjectSchema: z.ZodType<Prisma.GroupCreateManyOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateManyOrgInput>;
export const GroupCreateManyOrgInputObjectZodSchema = makeSchema();
