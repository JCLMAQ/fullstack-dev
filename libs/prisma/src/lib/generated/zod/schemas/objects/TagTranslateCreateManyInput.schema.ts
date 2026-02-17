import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  languageId: z.number().int(),
  translation: z.string(),
  tagId: z.number().int(),
  description: z.string().optional().nullable()
}).strict();
export const TagTranslateCreateManyInputObjectSchema: z.ZodType<Prisma.TagTranslateCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateManyInput>;
export const TagTranslateCreateManyInputObjectZodSchema = makeSchema();
