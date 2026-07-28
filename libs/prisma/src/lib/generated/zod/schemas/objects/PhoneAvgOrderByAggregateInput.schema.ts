import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const PhoneAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PhoneAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneAvgOrderByAggregateInput>;
export const PhoneAvgOrderByAggregateInputObjectZodSchema = makeSchema();
