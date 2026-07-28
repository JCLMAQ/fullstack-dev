import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { WordCountOutputTypeCountTranslationsArgsObjectSchema as WordCountOutputTypeCountTranslationsArgsObjectSchema } from './WordCountOutputTypeCountTranslationsArgs.schema'

const makeSchema = () => z.object({
  translations: z.union([z.boolean(), z.lazy(() => WordCountOutputTypeCountTranslationsArgsObjectSchema)]).optional()
}).strict();
export const WordCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WordCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WordCountOutputTypeSelect>;
export const WordCountOutputTypeSelectObjectZodSchema = makeSchema();
