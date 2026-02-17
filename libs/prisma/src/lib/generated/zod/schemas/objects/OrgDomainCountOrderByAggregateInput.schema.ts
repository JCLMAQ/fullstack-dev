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
export const OrgDomainCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainCountOrderByAggregateInput>;
export const OrgDomainCountOrderByAggregateInputObjectZodSchema = makeSchema();
