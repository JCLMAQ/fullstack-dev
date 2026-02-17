import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateManyTagCategoriesInputObjectSchema as TagValueCreateManyTagCategoriesInputObjectSchema } from './TagValueCreateManyTagCategoriesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TagValueCreateManyTagCategoriesInputObjectSchema), z.lazy(() => TagValueCreateManyTagCategoriesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TagValueCreateManyTagCategoriesInputEnvelopeObjectSchema: z.ZodType<Prisma.TagValueCreateManyTagCategoriesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateManyTagCategoriesInputEnvelope>;
export const TagValueCreateManyTagCategoriesInputEnvelopeObjectZodSchema = makeSchema();
