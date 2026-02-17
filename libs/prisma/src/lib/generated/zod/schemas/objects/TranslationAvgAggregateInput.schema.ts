import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  wordId: z.literal(true).optional(),
  languageId: z.literal(true).optional()
}).strict();
export const TranslationAvgAggregateInputObjectSchema: z.ZodType<Prisma.TranslationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TranslationAvgAggregateInputType>;
export const TranslationAvgAggregateInputObjectZodSchema = makeSchema();
