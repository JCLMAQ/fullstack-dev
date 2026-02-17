import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationFindManySchema as TranslationFindManySchema } from '../findManyTranslation.schema';
import { WordCountOutputTypeArgsObjectSchema as WordCountOutputTypeArgsObjectSchema } from './WordCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  translations: z.union([z.boolean(), z.lazy(() => TranslationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WordCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WordIncludeObjectSchema: z.ZodType<Prisma.WordInclude> = makeSchema() as unknown as z.ZodType<Prisma.WordInclude>;
export const WordIncludeObjectZodSchema = makeSchema();
