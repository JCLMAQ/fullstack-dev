import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const AddressSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AddressSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressSumOrderByAggregateInput>;
export const AddressSumOrderByAggregateInputObjectZodSchema = makeSchema();
