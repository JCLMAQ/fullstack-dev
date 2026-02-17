import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  translation: z.string(),
  tagId: z.number().int(),
  description: z.string().optional().nullable()
}).strict();
export const TagTranslateUncheckedCreateWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateUncheckedCreateWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUncheckedCreateWithoutLanguageInput>;
export const TagTranslateUncheckedCreateWithoutLanguageInputObjectZodSchema = makeSchema();
