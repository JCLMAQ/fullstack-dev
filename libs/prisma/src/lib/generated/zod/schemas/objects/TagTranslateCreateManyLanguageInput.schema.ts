import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  translation: z.string(),
  tagId: z.number().int(),
  description: z.string().optional().nullable()
}).strict();
export const TagTranslateCreateManyLanguageInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateManyLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateManyLanguageInput>;
export const TagTranslateCreateManyLanguageInputObjectZodSchema = makeSchema();
