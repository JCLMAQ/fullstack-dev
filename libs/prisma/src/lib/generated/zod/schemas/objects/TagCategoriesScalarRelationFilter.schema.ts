import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './TagCategoriesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TagCategoriesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TagCategoriesWhereInputObjectSchema).optional()
}).strict();
export const TagCategoriesScalarRelationFilterObjectSchema: z.ZodType<Prisma.TagCategoriesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesScalarRelationFilter>;
export const TagCategoriesScalarRelationFilterObjectZodSchema = makeSchema();
