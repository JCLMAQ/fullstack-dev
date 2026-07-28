import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrgDomainCountOrderByAggregateInputObjectSchema as OrgDomainCountOrderByAggregateInputObjectSchema } from './OrgDomainCountOrderByAggregateInput.schema';
import { OrgDomainAvgOrderByAggregateInputObjectSchema as OrgDomainAvgOrderByAggregateInputObjectSchema } from './OrgDomainAvgOrderByAggregateInput.schema';
import { OrgDomainMaxOrderByAggregateInputObjectSchema as OrgDomainMaxOrderByAggregateInputObjectSchema } from './OrgDomainMaxOrderByAggregateInput.schema';
import { OrgDomainMinOrderByAggregateInputObjectSchema as OrgDomainMinOrderByAggregateInputObjectSchema } from './OrgDomainMinOrderByAggregateInput.schema';
import { OrgDomainSumOrderByAggregateInputObjectSchema as OrgDomainSumOrderByAggregateInputObjectSchema } from './OrgDomainSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  domainName: SortOrderSchema.optional(),
  extension: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  _count: z.lazy(() => OrgDomainCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrgDomainAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrgDomainMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrgDomainMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrgDomainSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrgDomainOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrgDomainOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainOrderByWithAggregationInput>;
export const OrgDomainOrderByWithAggregationInputObjectZodSchema = makeSchema();
