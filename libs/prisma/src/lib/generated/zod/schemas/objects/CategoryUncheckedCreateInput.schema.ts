import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema as PostUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderCategory: z.number().int(),
  name: z.string(),
  Posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutCategoriesInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateInput>;
export const CategoryUncheckedCreateInputObjectZodSchema = makeSchema();
