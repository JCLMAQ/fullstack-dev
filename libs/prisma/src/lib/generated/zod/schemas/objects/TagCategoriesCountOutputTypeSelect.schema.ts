import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagCategoriesCountOutputTypeCountTagValuesArgsObjectSchema as TagCategoriesCountOutputTypeCountTagValuesArgsObjectSchema } from './TagCategoriesCountOutputTypeCountTagValuesArgs.schema'

const makeSchema = () => z.object({
  TagValues: z.union([z.boolean(), z.lazy(() => TagCategoriesCountOutputTypeCountTagValuesArgsObjectSchema)]).optional()
}).strict();
export const TagCategoriesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TagCategoriesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesCountOutputTypeSelect>;
export const TagCategoriesCountOutputTypeSelectObjectZodSchema = makeSchema();
