import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCreateManyUserInputObjectSchema as ApiKeyCreateManyUserInputObjectSchema } from './ApiKeyCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ApiKeyCreateManyUserInputObjectSchema), z.lazy(() => ApiKeyCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ApiKeyCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ApiKeyCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateManyUserInputEnvelope>;
export const ApiKeyCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
