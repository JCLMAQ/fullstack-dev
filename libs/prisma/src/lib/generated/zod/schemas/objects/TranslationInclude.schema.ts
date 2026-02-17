import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WordArgsObjectSchema as WordArgsObjectSchema } from './WordArgs.schema';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './LanguageArgs.schema'

const makeSchema = () => z.object({
  word: z.union([z.boolean(), z.lazy(() => WordArgsObjectSchema)]).optional(),
  language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional()
}).strict();
export const TranslationIncludeObjectSchema: z.ZodType<Prisma.TranslationInclude> = makeSchema() as unknown as z.ZodType<Prisma.TranslationInclude>;
export const TranslationIncludeObjectZodSchema = makeSchema();
