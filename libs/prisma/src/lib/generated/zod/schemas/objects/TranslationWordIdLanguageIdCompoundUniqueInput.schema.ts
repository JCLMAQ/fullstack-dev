import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  wordId: z.number().int(),
  languageId: z.number().int()
}).strict();
export const TranslationWordIdLanguageIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TranslationWordIdLanguageIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationWordIdLanguageIdCompoundUniqueInput>;
export const TranslationWordIdLanguageIdCompoundUniqueInputObjectZodSchema = makeSchema();
