import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { TagCategoriesCountOutputTypeArgsObjectSchema as TagCategoriesCountOutputTypeArgsObjectSchema } from './TagCategoriesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  modelName: z.boolean().optional(),
  description: z.boolean().optional(),
  recordId: z.boolean().optional(),
  TagValues: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCategoriesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagCategoriesSelectObjectSchema: z.ZodType<Prisma.TagCategoriesSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesSelect>;
export const TagCategoriesSelectObjectZodSchema = makeSchema();
