import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  definition: z.string().optional().nullable(),
  languageId: z.number().int()
}).strict();
export const TranslationCreateManyWordInputObjectSchema: z.ZodType<Prisma.TranslationCreateManyWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateManyWordInput>;
export const TranslationCreateManyWordInputObjectZodSchema = makeSchema();
