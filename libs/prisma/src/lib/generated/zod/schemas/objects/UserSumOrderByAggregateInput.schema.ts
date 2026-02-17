import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  languageId: SortOrderSchema.optional(),
  groupId: SortOrderSchema.optional()
}).strict();
export const UserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSumOrderByAggregateInput>;
export const UserSumOrderByAggregateInputObjectZodSchema = makeSchema();
