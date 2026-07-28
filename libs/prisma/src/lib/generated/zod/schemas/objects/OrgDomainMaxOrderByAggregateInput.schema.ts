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
  domainName: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional()
}).strict();
export const OrgDomainMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainMaxOrderByAggregateInput>;
export const OrgDomainMaxOrderByAggregateInputObjectZodSchema = makeSchema();
