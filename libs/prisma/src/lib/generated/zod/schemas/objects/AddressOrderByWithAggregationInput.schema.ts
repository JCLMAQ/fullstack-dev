import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AddressCountOrderByAggregateInputObjectSchema as AddressCountOrderByAggregateInputObjectSchema } from './AddressCountOrderByAggregateInput.schema';
import { AddressAvgOrderByAggregateInputObjectSchema as AddressAvgOrderByAggregateInputObjectSchema } from './AddressAvgOrderByAggregateInput.schema';
import { AddressMaxOrderByAggregateInputObjectSchema as AddressMaxOrderByAggregateInputObjectSchema } from './AddressMaxOrderByAggregateInput.schema';
import { AddressMinOrderByAggregateInputObjectSchema as AddressMinOrderByAggregateInputObjectSchema } from './AddressMinOrderByAggregateInput.schema';
import { AddressSumOrderByAggregateInputObjectSchema as AddressSumOrderByAggregateInputObjectSchema } from './AddressSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  street: SortOrderSchema.optional(),
  buildingNum: SortOrderSchema.optional(),
  aptNum: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zipCode: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  countryIso: SortOrderSchema.optional(),
  addressType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPrimary: SortOrderSchema.optional(),
  _count: z.lazy(() => AddressCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AddressAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AddressMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AddressMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AddressSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AddressOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressOrderByWithAggregationInput>;
export const AddressOrderByWithAggregationInputObjectZodSchema = makeSchema();
