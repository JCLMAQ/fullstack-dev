import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const PhoneSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PhoneSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneSumOrderByAggregateInput>;
export const PhoneSumOrderByAggregateInputObjectZodSchema = makeSchema();
