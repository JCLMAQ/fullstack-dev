import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateManyProfileUserInputObjectSchema as FileCreateManyProfileUserInputObjectSchema } from './FileCreateManyProfileUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileCreateManyProfileUserInputObjectSchema), z.lazy(() => FileCreateManyProfileUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyProfileUserInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyProfileUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyProfileUserInputEnvelope>;
export const FileCreateManyProfileUserInputEnvelopeObjectZodSchema = makeSchema();
