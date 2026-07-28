import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  tokenId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  emailToken: SortOrderSchema.optional(),
  valid: SortOrderSchema.optional(),
  expiration: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const TokenCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TokenCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TokenCountOrderByAggregateInput>;
export const TokenCountOrderByAggregateInputObjectZodSchema = makeSchema();
