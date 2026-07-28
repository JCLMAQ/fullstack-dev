import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderCategory: z.number().int(),
  name: z.string()
}).strict();
export const CategoryUncheckedCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateWithoutPostsInput>;
export const CategoryUncheckedCreateWithoutPostsInputObjectZodSchema = makeSchema();
