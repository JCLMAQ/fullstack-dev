import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './TranslationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereInputObjectSchema).optional()
}).strict();
export const LanguageCountOutputTypeCountTranslationsArgsObjectSchema = makeSchema();
export const LanguageCountOutputTypeCountTranslationsArgsObjectZodSchema = makeSchema();
