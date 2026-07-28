import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateNestedManyWithoutCategoriesInputObjectSchema as PostCreateNestedManyWithoutCategoriesInputObjectSchema } from './PostCreateNestedManyWithoutCategoriesInput.schema'

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
  Posts: z.lazy(() => PostCreateNestedManyWithoutCategoriesInputObjectSchema).optional()
}).strict();
export const CategoryCreateInputObjectSchema: z.ZodType<Prisma.CategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateInput>;
export const CategoryCreateInputObjectZodSchema = makeSchema();
