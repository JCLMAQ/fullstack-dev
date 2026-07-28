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
export const UserSecretCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSecretCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretCountOrderByAggregateInput>;
export const UserSecretCountOrderByAggregateInputObjectZodSchema = makeSchema();
