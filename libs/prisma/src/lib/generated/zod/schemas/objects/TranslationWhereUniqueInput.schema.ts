import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationWordIdLanguageIdCompoundUniqueInputObjectSchema as TranslationWordIdLanguageIdCompoundUniqueInputObjectSchema } from './TranslationWordIdLanguageIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  wordId_languageId: z.lazy(() => TranslationWordIdLanguageIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const TranslationWhereUniqueInputObjectSchema: z.ZodType<Prisma.TranslationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationWhereUniqueInput>;
export const TranslationWhereUniqueInputObjectZodSchema = makeSchema();
