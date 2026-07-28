import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => StoryWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => StoryWhereInputObjectSchema).optional().nullable()
}).strict();
export const StoryNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.StoryNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StoryNullableScalarRelationFilter>;
export const StoryNullableScalarRelationFilterObjectZodSchema = makeSchema();
