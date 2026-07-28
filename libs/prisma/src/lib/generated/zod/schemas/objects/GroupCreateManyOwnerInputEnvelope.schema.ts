import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCreateManyOwnerInputObjectSchema as GroupCreateManyOwnerInputObjectSchema } from './GroupCreateManyOwnerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GroupCreateManyOwnerInputObjectSchema), z.lazy(() => GroupCreateManyOwnerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GroupCreateManyOwnerInputEnvelopeObjectSchema: z.ZodType<Prisma.GroupCreateManyOwnerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateManyOwnerInputEnvelope>;
export const GroupCreateManyOwnerInputEnvelopeObjectZodSchema = makeSchema();
