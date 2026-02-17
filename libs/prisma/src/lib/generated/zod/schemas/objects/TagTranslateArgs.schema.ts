import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagTranslateSelectObjectSchema as TagTranslateSelectObjectSchema } from './TagTranslateSelect.schema';
import { TagTranslateIncludeObjectSchema as TagTranslateIncludeObjectSchema } from './TagTranslateInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TagTranslateSelectObjectSchema).optional(),
  include: z.lazy(() => TagTranslateIncludeObjectSchema).optional()
}).strict();
export const TagTranslateArgsObjectSchema = makeSchema();
export const TagTranslateArgsObjectZodSchema = makeSchema();
