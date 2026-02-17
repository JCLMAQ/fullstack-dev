import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateManyOrgInputObjectSchema as TodoCreateManyOrgInputObjectSchema } from './TodoCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TodoCreateManyOrgInputObjectSchema), z.lazy(() => TodoCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TodoCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.TodoCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyOrgInputEnvelope>;
export const TodoCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
