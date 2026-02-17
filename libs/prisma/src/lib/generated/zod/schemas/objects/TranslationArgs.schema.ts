import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './TranslationSelect.schema';
import { TranslationIncludeObjectSchema as TranslationIncludeObjectSchema } from './TranslationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TranslationSelectObjectSchema).optional(),
  include: z.lazy(() => TranslationIncludeObjectSchema).optional()
}).strict();
export const TranslationArgsObjectSchema = makeSchema();
export const TranslationArgsObjectZodSchema = makeSchema();
