import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrgEmailCountOrderByAggregateInputObjectSchema as OrgEmailCountOrderByAggregateInputObjectSchema } from './OrgEmailCountOrderByAggregateInput.schema';
import { OrgEmailAvgOrderByAggregateInputObjectSchema as OrgEmailAvgOrderByAggregateInputObjectSchema } from './OrgEmailAvgOrderByAggregateInput.schema';
import { OrgEmailMaxOrderByAggregateInputObjectSchema as OrgEmailMaxOrderByAggregateInputObjectSchema } from './OrgEmailMaxOrderByAggregateInput.schema';
import { OrgEmailMinOrderByAggregateInputObjectSchema as OrgEmailMinOrderByAggregateInputObjectSchema } from './OrgEmailMinOrderByAggregateInput.schema';
import { OrgEmailSumOrderByAggregateInputObjectSchema as OrgEmailSumOrderByAggregateInputObjectSchema } from './OrgEmailSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orgId: SortOrderSchema.optional(),
  _count: z.lazy(() => OrgEmailCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrgEmailAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrgEmailMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrgEmailMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrgEmailSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrgEmailOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrgEmailOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailOrderByWithAggregationInput>;
export const OrgEmailOrderByWithAggregationInputObjectZodSchema = makeSchema();
