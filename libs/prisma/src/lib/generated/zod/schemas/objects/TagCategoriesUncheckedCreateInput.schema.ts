import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueUncheckedCreateNestedManyWithoutTagCategoriesInputObjectSchema as TagValueUncheckedCreateNestedManyWithoutTagCategoriesInputObjectSchema } from './TagValueUncheckedCreateNestedManyWithoutTagCategoriesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  modelName: z.string(),
  description: z.string().optional().nullable(),
  recordId: z.string(),
  TagValues: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutTagCategoriesInputObjectSchema).optional()
}).strict();
export const TagCategoriesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TagCategoriesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesUncheckedCreateInput>;
export const TagCategoriesUncheckedCreateInputObjectZodSchema = makeSchema();
