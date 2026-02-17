import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  isValidated: SortOrderSchema.optional(),
  emailToken: SortOrderSchema.optional(),
  timeStamp: SortOrderSchema.optional()
}).strict();
export const AccountValidationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountValidationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationMaxOrderByAggregateInput>;
export const AccountValidationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
