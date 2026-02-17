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
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  emailITAdmin: SortOrderSchema.optional(),
  webSite: SortOrderSchema.optional(),
  mainOrgId: SortOrderSchema.optional()
}).strict();
export const OrganizationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationMaxOrderByAggregateInput>;
export const OrganizationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
