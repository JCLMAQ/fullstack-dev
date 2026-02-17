import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagCategoriesCountOutputTypeSelectObjectSchema as TagCategoriesCountOutputTypeSelectObjectSchema } from './TagCategoriesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TagCategoriesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TagCategoriesCountOutputTypeArgsObjectSchema = makeSchema();
export const TagCategoriesCountOutputTypeArgsObjectZodSchema = makeSchema();
