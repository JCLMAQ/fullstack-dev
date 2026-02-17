import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TagValueWhereInputObjectSchema).optional(),
  some: z.lazy(() => TagValueWhereInputObjectSchema).optional(),
  none: z.lazy(() => TagValueWhereInputObjectSchema).optional()
}).strict();
export const TagValueListRelationFilterObjectSchema: z.ZodType<Prisma.TagValueListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TagValueListRelationFilter>;
export const TagValueListRelationFilterObjectZodSchema = makeSchema();
