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
  name: z.string(),
  position: z.number().int().optional(),
  color: z.string().optional().nullable(),
  tagCategoriesId: z.number().int()
}).strict();
export const TagValueCreateManyMainTagInputObjectSchema: z.ZodType<Prisma.TagValueCreateManyMainTagInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateManyMainTagInput>;
export const TagValueCreateManyMainTagInputObjectZodSchema = makeSchema();
