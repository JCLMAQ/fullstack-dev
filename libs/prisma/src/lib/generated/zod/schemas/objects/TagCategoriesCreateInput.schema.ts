import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateNestedManyWithoutTagCategoriesInputObjectSchema as TagValueCreateNestedManyWithoutTagCategoriesInputObjectSchema } from './TagValueCreateNestedManyWithoutTagCategoriesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  modelName: z.string(),
  description: z.string().optional().nullable(),
  recordId: z.string(),
  TagValues: z.lazy(() => TagValueCreateNestedManyWithoutTagCategoriesInputObjectSchema).optional()
}).strict();
export const TagCategoriesCreateInputObjectSchema: z.ZodType<Prisma.TagCategoriesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesCreateInput>;
export const TagCategoriesCreateInputObjectZodSchema = makeSchema();
