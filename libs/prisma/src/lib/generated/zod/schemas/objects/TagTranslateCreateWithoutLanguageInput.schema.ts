import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueCreateNestedOneWithoutTagTranslatesInputObjectSchema as TagValueCreateNestedOneWithoutTagTranslatesInputObjectSchema } from './TagValueCreateNestedOneWithoutTagTranslatesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  translation: z.string(),
  description: z.string().optional().nullable(),
  tagValue: z.lazy(() => TagValueCreateNestedOneWithoutTagTranslatesInputObjectSchema)
}).strict();
export const TagTranslateCreateWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateWithoutLanguageInput>;
export const TagTranslateCreateWithoutLanguageInputObjectZodSchema = makeSchema();
