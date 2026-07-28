import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TranslationFindManySchema as TranslationFindManySchema } from '../findManyTranslation.schema';
import { WordCountOutputTypeArgsObjectSchema as WordCountOutputTypeArgsObjectSchema } from './WordCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  slug: z.boolean().optional(),
  type: z.boolean().optional(),
  translations: z.union([z.boolean(), z.lazy(() => TranslationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WordCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WordSelectObjectSchema: z.ZodType<Prisma.WordSelect> = makeSchema() as unknown as z.ZodType<Prisma.WordSelect>;
export const WordSelectObjectZodSchema = makeSchema();
