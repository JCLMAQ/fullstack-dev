import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './LanguageSelect.schema';
import { LanguageIncludeObjectSchema as LanguageIncludeObjectSchema } from './LanguageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LanguageSelectObjectSchema).optional(),
  include: z.lazy(() => LanguageIncludeObjectSchema).optional()
}).strict();
export const LanguageArgsObjectSchema = makeSchema();
export const LanguageArgsObjectZodSchema = makeSchema();
