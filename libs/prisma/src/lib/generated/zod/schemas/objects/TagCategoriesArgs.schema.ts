import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagCategoriesSelectObjectSchema as TagCategoriesSelectObjectSchema } from './TagCategoriesSelect.schema';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './TagCategoriesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TagCategoriesSelectObjectSchema).optional(),
  include: z.lazy(() => TagCategoriesIncludeObjectSchema).optional()
}).strict();
export const TagCategoriesArgsObjectSchema = makeSchema();
export const TagCategoriesArgsObjectZodSchema = makeSchema();
