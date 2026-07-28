import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  wordId: z.literal(true).optional(),
  languageId: z.literal(true).optional()
}).strict();
export const TranslationSumAggregateInputObjectSchema: z.ZodType<Prisma.TranslationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TranslationSumAggregateInputType>;
export const TranslationSumAggregateInputObjectZodSchema = makeSchema();
