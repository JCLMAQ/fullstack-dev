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
  modelName: z.string(),
  description: z.string().optional().nullable(),
  recordId: z.string()
}).strict();
export const TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema: z.ZodType<Prisma.TagCategoriesUncheckedCreateWithoutTagValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesUncheckedCreateWithoutTagValuesInput>;
export const TagCategoriesUncheckedCreateWithoutTagValuesInputObjectZodSchema = makeSchema();
