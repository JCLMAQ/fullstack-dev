import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneCreateManyUserInputObjectSchema as PhoneCreateManyUserInputObjectSchema } from './PhoneCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PhoneCreateManyUserInputObjectSchema), z.lazy(() => PhoneCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PhoneCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PhoneCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PhoneCreateManyUserInputEnvelope>;
export const PhoneCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
