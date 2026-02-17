import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateManyStoryInputObjectSchema as FileCreateManyStoryInputObjectSchema } from './FileCreateManyStoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileCreateManyStoryInputObjectSchema), z.lazy(() => FileCreateManyStoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyStoryInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyStoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyStoryInputEnvelope>;
export const FileCreateManyStoryInputEnvelopeObjectZodSchema = makeSchema();
