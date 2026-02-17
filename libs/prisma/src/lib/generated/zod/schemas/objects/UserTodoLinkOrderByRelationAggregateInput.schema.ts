import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const UserTodoLinkOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.UserTodoLinkOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkOrderByRelationAggregateInput>;
export const UserTodoLinkOrderByRelationAggregateInputObjectZodSchema = makeSchema();
