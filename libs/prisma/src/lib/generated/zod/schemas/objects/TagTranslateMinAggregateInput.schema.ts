import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  languageId: z.literal(true).optional(),
  translation: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  description: z.literal(true).optional()
}).strict();
export const TagTranslateMinAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateMinAggregateInputType>;
export const TagTranslateMinAggregateInputObjectZodSchema = makeSchema();
