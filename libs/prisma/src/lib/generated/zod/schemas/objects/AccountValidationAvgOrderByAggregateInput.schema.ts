import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const AccountValidationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountValidationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationAvgOrderByAggregateInput>;
export const AccountValidationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
