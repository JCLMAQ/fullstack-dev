import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateNestedOneWithoutTagTranslatesInputObjectSchema as LanguageCreateNestedOneWithoutTagTranslatesInputObjectSchema } from './LanguageCreateNestedOneWithoutTagTranslatesInput.schema';
import { TagValueCreateNestedOneWithoutTagTranslatesInputObjectSchema as TagValueCreateNestedOneWithoutTagTranslatesInputObjectSchema } from './TagValueCreateNestedOneWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  translation: z.string(),
  description: z.string().optional().nullable(),
  language: z.lazy(() => LanguageCreateNestedOneWithoutTagTranslatesInputObjectSchema),
  tagValue: z.lazy(() => TagValueCreateNestedOneWithoutTagTranslatesInputObjectSchema)
}).strict();
export const TagTranslateCreateInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateInput>;
export const TagTranslateCreateInputObjectZodSchema = makeSchema();
