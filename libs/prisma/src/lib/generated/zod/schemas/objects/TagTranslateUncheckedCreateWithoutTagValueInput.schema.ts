import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  languageId: z.number().int(),
  translation: z.string(),
  description: z.string().optional().nullable()
}).strict();
export const TagTranslateUncheckedCreateWithoutTagValueInputObjectSchema: z.ZodType<Prisma.TagTranslateUncheckedCreateWithoutTagValueInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateUncheckedCreateWithoutTagValueInput>;
export const TagTranslateUncheckedCreateWithoutTagValueInputObjectZodSchema = makeSchema();
