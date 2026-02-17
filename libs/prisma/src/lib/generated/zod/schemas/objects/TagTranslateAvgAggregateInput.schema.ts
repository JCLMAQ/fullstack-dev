import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  languageId: z.literal(true).optional(),
  tagId: z.literal(true).optional()
}).strict();
export const TagTranslateAvgAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateAvgAggregateInputType>;
export const TagTranslateAvgAggregateInputObjectZodSchema = makeSchema();
