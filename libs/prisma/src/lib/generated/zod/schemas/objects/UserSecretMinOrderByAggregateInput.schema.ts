import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  pwdHash: SortOrderSchema.optional(),
  salt: SortOrderSchema.optional(),
  isAdmin: SortOrderSchema.optional()
}).strict();
export const UserSecretMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSecretMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretMinOrderByAggregateInput>;
export const UserSecretMinOrderByAggregateInputObjectZodSchema = makeSchema();
