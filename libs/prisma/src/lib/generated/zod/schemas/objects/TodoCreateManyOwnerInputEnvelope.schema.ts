import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoCreateManyOwnerInputObjectSchema as TodoCreateManyOwnerInputObjectSchema } from './TodoCreateManyOwnerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TodoCreateManyOwnerInputObjectSchema), z.lazy(() => TodoCreateManyOwnerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TodoCreateManyOwnerInputEnvelopeObjectSchema: z.ZodType<Prisma.TodoCreateManyOwnerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyOwnerInputEnvelope>;
export const TodoCreateManyOwnerInputEnvelopeObjectZodSchema = makeSchema();
