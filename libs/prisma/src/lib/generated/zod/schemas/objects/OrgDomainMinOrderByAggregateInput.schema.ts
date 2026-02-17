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
  domainName: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional()
}).strict();
export const OrgDomainMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainMinOrderByAggregateInput>;
export const OrgDomainMinOrderByAggregateInputObjectZodSchema = makeSchema();
