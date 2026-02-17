import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrgEmailUseToCountOrderByAggregateInputObjectSchema as OrgEmailUseToCountOrderByAggregateInputObjectSchema } from './OrgEmailUseToCountOrderByAggregateInput.schema';
import { OrgEmailUseToAvgOrderByAggregateInputObjectSchema as OrgEmailUseToAvgOrderByAggregateInputObjectSchema } from './OrgEmailUseToAvgOrderByAggregateInput.schema';
import { OrgEmailUseToMaxOrderByAggregateInputObjectSchema as OrgEmailUseToMaxOrderByAggregateInputObjectSchema } from './OrgEmailUseToMaxOrderByAggregateInput.schema';
import { OrgEmailUseToMinOrderByAggregateInputObjectSchema as OrgEmailUseToMinOrderByAggregateInputObjectSchema } from './OrgEmailUseToMinOrderByAggregateInput.schema';
import { OrgEmailUseToSumOrderByAggregateInputObjectSchema as OrgEmailUseToSumOrderByAggregateInputObjectSchema } from './OrgEmailUseToSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  useTo: SortOrderSchema.optional(),
  isActiv: SortOrderSchema.optional(),
  emailOrgId: SortOrderSchema.optional(),
  _count: z.lazy(() => OrgEmailUseToCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrgEmailUseToAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrgEmailUseToMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrgEmailUseToMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrgEmailUseToSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrgEmailUseToOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToOrderByWithAggregationInput>;
export const OrgEmailUseToOrderByWithAggregationInputObjectZodSchema = makeSchema();
