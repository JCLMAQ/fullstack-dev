import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  definition: z.string().optional().nullable(),
  wordId: z.number().int(),
  languageId: z.number().int()
}).strict();
export const TranslationCreateManyInputObjectSchema: z.ZodType<Prisma.TranslationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateManyInput>;
export const TranslationCreateManyInputObjectZodSchema = makeSchema();
