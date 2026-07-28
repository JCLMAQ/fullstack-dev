import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AppEmailDomainCountOrderByAggregateInputObjectSchema as AppEmailDomainCountOrderByAggregateInputObjectSchema } from './AppEmailDomainCountOrderByAggregateInput.schema';
import { AppEmailDomainAvgOrderByAggregateInputObjectSchema as AppEmailDomainAvgOrderByAggregateInputObjectSchema } from './AppEmailDomainAvgOrderByAggregateInput.schema';
import { AppEmailDomainMaxOrderByAggregateInputObjectSchema as AppEmailDomainMaxOrderByAggregateInputObjectSchema } from './AppEmailDomainMaxOrderByAggregateInput.schema';
import { AppEmailDomainMinOrderByAggregateInputObjectSchema as AppEmailDomainMinOrderByAggregateInputObjectSchema } from './AppEmailDomainMinOrderByAggregateInput.schema';
import { AppEmailDomainSumOrderByAggregateInputObjectSchema as AppEmailDomainSumOrderByAggregateInputObjectSchema } from './AppEmailDomainSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  domain: SortOrderSchema.optional(),
  allowed: SortOrderSchema.optional(),
  _count: z.lazy(() => AppEmailDomainCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AppEmailDomainAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AppEmailDomainMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AppEmailDomainMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AppEmailDomainSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AppEmailDomainOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AppEmailDomainOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainOrderByWithAggregationInput>;
export const AppEmailDomainOrderByWithAggregationInputObjectZodSchema = makeSchema();
