import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateWhereInputObjectSchema as TagTranslateWhereInputObjectSchema } from './TagTranslateWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TagTranslateWhereInputObjectSchema).optional(),
  some: z.lazy(() => TagTranslateWhereInputObjectSchema).optional(),
  none: z.lazy(() => TagTranslateWhereInputObjectSchema).optional()
}).strict();
export const TagTranslateListRelationFilterObjectSchema: z.ZodType<Prisma.TagTranslateListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateListRelationFilter>;
export const TagTranslateListRelationFilterObjectZodSchema = makeSchema();
