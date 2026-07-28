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
  userId: SortOrderSchema.optional(),
  tokenId: SortOrderSchema.optional()
}).strict();
export const RefreshTokenCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefreshTokenCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenCountOrderByAggregateInput>;
export const RefreshTokenCountOrderByAggregateInputObjectZodSchema = makeSchema();
