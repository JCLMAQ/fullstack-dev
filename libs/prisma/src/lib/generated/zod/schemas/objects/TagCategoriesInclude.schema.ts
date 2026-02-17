import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { TagCategoriesCountOutputTypeArgsObjectSchema as TagCategoriesCountOutputTypeArgsObjectSchema } from './TagCategoriesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  TagValues: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCategoriesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagCategoriesIncludeObjectSchema: z.ZodType<Prisma.TagCategoriesInclude> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesInclude>;
export const TagCategoriesIncludeObjectZodSchema = makeSchema();
