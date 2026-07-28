import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  definition: z.literal(true).optional(),
  wordId: z.literal(true).optional(),
  languageId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TranslationCountAggregateInputObjectSchema: z.ZodType<Prisma.TranslationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCountAggregateInputType>;
export const TranslationCountAggregateInputObjectZodSchema = makeSchema();
