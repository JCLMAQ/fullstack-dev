import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreateManyOwnerInputObjectSchema as FileCreateManyOwnerInputObjectSchema } from './FileCreateManyOwnerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileCreateManyOwnerInputObjectSchema), z.lazy(() => FileCreateManyOwnerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyOwnerInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyOwnerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyOwnerInputEnvelope>;
export const FileCreateManyOwnerInputEnvelopeObjectZodSchema = makeSchema();
