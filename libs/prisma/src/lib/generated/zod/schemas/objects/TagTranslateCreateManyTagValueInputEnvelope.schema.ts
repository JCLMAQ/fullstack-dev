import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateCreateManyTagValueInputObjectSchema as TagTranslateCreateManyTagValueInputObjectSchema } from './TagTranslateCreateManyTagValueInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TagTranslateCreateManyTagValueInputObjectSchema), z.lazy(() => TagTranslateCreateManyTagValueInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TagTranslateCreateManyTagValueInputEnvelopeObjectSchema: z.ZodType<Prisma.TagTranslateCreateManyTagValueInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateManyTagValueInputEnvelope>;
export const TagTranslateCreateManyTagValueInputEnvelopeObjectZodSchema = makeSchema();
