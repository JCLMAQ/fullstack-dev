import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateNestedOneWithoutTagTranslatesInputObjectSchema as LanguageCreateNestedOneWithoutTagTranslatesInputObjectSchema } from './LanguageCreateNestedOneWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  translation: z.string(),
  description: z.string().optional().nullable(),
  language: z.lazy(() => LanguageCreateNestedOneWithoutTagTranslatesInputObjectSchema)
}).strict();
export const TagTranslateCreateWithoutTagValueInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateWithoutTagValueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateWithoutTagValueInput>;
export const TagTranslateCreateWithoutTagValueInputObjectZodSchema = makeSchema();
