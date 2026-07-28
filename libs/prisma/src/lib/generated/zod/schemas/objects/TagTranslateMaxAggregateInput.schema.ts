import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  languageId: z.literal(true).optional(),
  translation: z.literal(true).optional(),
  tagId: z.literal(true).optional(),
  description: z.literal(true).optional()
}).strict();
export const TagTranslateMaxAggregateInputObjectSchema: z.ZodType<Prisma.TagTranslateMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateMaxAggregateInputType>;
export const TagTranslateMaxAggregateInputObjectZodSchema = makeSchema();
