import * as z from 'zod';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './TranslationWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereInputObjectSchema).optional()
}).strict();
export const WordCountOutputTypeCountTranslationsArgsObjectSchema = makeSchema();
export const WordCountOutputTypeCountTranslationsArgsObjectZodSchema = makeSchema();
