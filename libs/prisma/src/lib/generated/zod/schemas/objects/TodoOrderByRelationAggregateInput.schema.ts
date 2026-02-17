import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TodoOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TodoOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoOrderByRelationAggregateInput>;
export const TodoOrderByRelationAggregateInputObjectZodSchema = makeSchema();
