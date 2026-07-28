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
  orderGroup: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  isActiv: z.coerce.date().optional().nullable(),
  orgId: z.string()
}).strict();
export const GroupCreateManyInputObjectSchema: z.ZodType<Prisma.GroupCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateManyInput>;
export const GroupCreateManyInputObjectZodSchema = makeSchema();
