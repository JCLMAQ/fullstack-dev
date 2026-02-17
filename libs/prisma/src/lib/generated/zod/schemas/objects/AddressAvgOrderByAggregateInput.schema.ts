import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const AddressAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AddressAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressAvgOrderByAggregateInput>;
export const AddressAvgOrderByAggregateInputObjectZodSchema = makeSchema();
