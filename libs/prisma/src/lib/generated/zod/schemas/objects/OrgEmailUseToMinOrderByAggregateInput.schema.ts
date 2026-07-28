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
  useTo: SortOrderSchema.optional(),
  isActiv: SortOrderSchema.optional(),
  emailOrgId: SortOrderSchema.optional()
}).strict();
export const OrgEmailUseToMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToMinOrderByAggregateInput>;
export const OrgEmailUseToMinOrderByAggregateInputObjectZodSchema = makeSchema();
