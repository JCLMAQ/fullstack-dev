import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TagValueWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TagValueWhereInputObjectSchema).optional().nullable()
}).strict();
export const TagValueNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TagValueNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TagValueNullableScalarRelationFilter>;
export const TagValueNullableScalarRelationFilterObjectZodSchema = makeSchema();
