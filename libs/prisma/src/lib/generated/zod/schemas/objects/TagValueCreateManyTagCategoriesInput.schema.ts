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
  name: z.string(),
  position: z.number().int().optional(),
  mainTagId: z.number().int().optional().nullable()
}).strict();
export const TagValueCreateManyTagCategoriesInputObjectSchema: z.ZodType<Prisma.TagValueCreateManyTagCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateManyTagCategoriesInput>;
export const TagValueCreateManyTagCategoriesInputObjectZodSchema = makeSchema();
