import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
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
export const TokenMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TokenMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TokenMaxOrderByAggregateInput>;
export const TokenMaxOrderByAggregateInputObjectZodSchema = makeSchema();
