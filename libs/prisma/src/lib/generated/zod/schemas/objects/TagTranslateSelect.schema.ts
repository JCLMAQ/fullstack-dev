import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageArgsObjectSchema as LanguageArgsObjectSchema } from './LanguageArgs.schema';
import { TagValueArgsObjectSchema as TagValueArgsObjectSchema } from './TagValueArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  language: z.union([z.boolean(), z.lazy(() => LanguageArgsObjectSchema)]).optional(),
  languageId: z.boolean().optional(),
  translation: z.boolean().optional(),
  tagId: z.boolean().optional(),
  tagValue: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional(),
  description: z.boolean().optional()
}).strict();
export const TagTranslateSelectObjectSchema: z.ZodType<Prisma.TagTranslateSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateSelect>;
export const TagTranslateSelectObjectZodSchema = makeSchema();
