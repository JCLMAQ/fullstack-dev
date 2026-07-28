import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './LanguageArgs.schema';
import { TagValueArgsObjectSchema as TagValueArgsObjectSchema } from './TagValueArgs.schema'

const makeSchema = () => z.object({
  language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional(),
  tagValue: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional()
}).strict();
export const TagTranslateIncludeObjectSchema: z.ZodType<Prisma.TagTranslateInclude> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateInclude>;
export const TagTranslateIncludeObjectZodSchema = makeSchema();
