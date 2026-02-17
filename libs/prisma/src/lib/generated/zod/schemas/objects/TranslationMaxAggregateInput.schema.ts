import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  definition: z.literal(true).optional(),
  wordId: z.literal(true).optional(),
  languageId: z.literal(true).optional()
}).strict();
export const TranslationMaxAggregateInputObjectSchema: z.ZodType<Prisma.TranslationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TranslationMaxAggregateInputType>;
export const TranslationMaxAggregateInputObjectZodSchema = makeSchema();
