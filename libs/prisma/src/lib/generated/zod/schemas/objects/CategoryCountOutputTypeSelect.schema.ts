import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { CategoryCountOutputTypeCountPostsArgsObjectSchema as CategoryCountOutputTypeCountPostsArgsObjectSchema } from './CategoryCountOutputTypeCountPostsArgs.schema'

const makeSchema = () => z.object({
  Posts: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeCountPostsArgsObjectSchema)]).optional()
}).strict();
export const CategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCountOutputTypeSelect>;
export const CategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
