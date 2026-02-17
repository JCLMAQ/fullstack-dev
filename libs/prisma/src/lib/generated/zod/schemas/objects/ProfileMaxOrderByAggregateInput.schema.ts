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
  orderProfile: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional()
}).strict();
export const ProfileMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMaxOrderByAggregateInput>;
export const ProfileMaxOrderByAggregateInputObjectZodSchema = makeSchema();
