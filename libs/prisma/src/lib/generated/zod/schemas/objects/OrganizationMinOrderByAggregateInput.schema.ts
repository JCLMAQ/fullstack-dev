import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  emailITAdmin: SortOrderSchema.optional(),
  webSite: SortOrderSchema.optional(),
  mainOrgId: SortOrderSchema.optional()
}).strict();
export const OrganizationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationMinOrderByAggregateInput>;
export const OrganizationMinOrderByAggregateInputObjectZodSchema = makeSchema();
