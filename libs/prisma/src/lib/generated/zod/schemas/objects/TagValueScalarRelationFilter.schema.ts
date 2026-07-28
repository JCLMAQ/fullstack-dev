import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TagValueWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TagValueWhereInputObjectSchema).optional()
}).strict();
export const TagValueScalarRelationFilterObjectSchema: z.ZodType<Prisma.TagValueScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TagValueScalarRelationFilter>;
export const TagValueScalarRelationFilterObjectZodSchema = makeSchema();
