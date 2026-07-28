import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PhoneOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PhoneOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneOrderByRelationAggregateInput>;
export const PhoneOrderByRelationAggregateInputObjectZodSchema = makeSchema();
