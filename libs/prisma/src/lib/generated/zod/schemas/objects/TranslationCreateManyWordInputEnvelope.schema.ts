import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TranslationCreateManyWordInputObjectSchema as TranslationCreateManyWordInputObjectSchema } from './TranslationCreateManyWordInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TranslationCreateManyWordInputObjectSchema), z.lazy(() => TranslationCreateManyWordInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TranslationCreateManyWordInputEnvelopeObjectSchema: z.ZodType<Prisma.TranslationCreateManyWordInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateManyWordInputEnvelope>;
export const TranslationCreateManyWordInputEnvelopeObjectZodSchema = makeSchema();
