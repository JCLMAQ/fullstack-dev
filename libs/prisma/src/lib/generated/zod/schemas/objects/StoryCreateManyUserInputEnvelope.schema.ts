import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryCreateManyUserInputObjectSchema as StoryCreateManyUserInputObjectSchema } from './StoryCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StoryCreateManyUserInputObjectSchema), z.lazy(() => StoryCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StoryCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.StoryCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateManyUserInputEnvelope>;
export const StoryCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
