import * as z from 'zod';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const PostCountOutputTypeCountCategoriesArgsObjectSchema = makeSchema();
export const PostCountOutputTypeCountCategoriesArgsObjectZodSchema = makeSchema();
