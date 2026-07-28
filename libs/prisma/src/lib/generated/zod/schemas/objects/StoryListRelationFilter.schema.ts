import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => StoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => StoryWhereInputObjectSchema).optional()
}).strict();
export const StoryListRelationFilterObjectSchema: z.ZodType<Prisma.StoryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StoryListRelationFilter>;
export const StoryListRelationFilterObjectZodSchema = makeSchema();
