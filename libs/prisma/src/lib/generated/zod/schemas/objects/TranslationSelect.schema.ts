import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WordArgsObjectSchema as WordArgsObjectSchema } from './WordArgs.schema';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './LanguageArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  definition: z.boolean().optional(),
  wordId: z.boolean().optional(),
  word: z.union([z.boolean(), z.lazy(() => WordArgsObjectSchema)]).optional(),
  languageId: z.boolean().optional(),
  language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional()
}).strict();
export const TranslationSelectObjectSchema: z.ZodType<Prisma.TranslationSelect> = makeSchema() as unknown as z.ZodType<Prisma.TranslationSelect>;
export const TranslationSelectObjectZodSchema = makeSchema();
