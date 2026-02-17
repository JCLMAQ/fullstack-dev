import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PhoneCountOrderByAggregateInputObjectSchema as PhoneCountOrderByAggregateInputObjectSchema } from './PhoneCountOrderByAggregateInput.schema';
import { PhoneAvgOrderByAggregateInputObjectSchema as PhoneAvgOrderByAggregateInputObjectSchema } from './PhoneAvgOrderByAggregateInput.schema';
import { PhoneMaxOrderByAggregateInputObjectSchema as PhoneMaxOrderByAggregateInputObjectSchema } from './PhoneMaxOrderByAggregateInput.schema';
import { PhoneMinOrderByAggregateInputObjectSchema as PhoneMinOrderByAggregateInputObjectSchema } from './PhoneMinOrderByAggregateInput.schema';
import { PhoneSumOrderByAggregateInputObjectSchema as PhoneSumOrderByAggregateInputObjectSchema } from './PhoneSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  countryCode: SortOrderSchema.optional(),
  countryIso: SortOrderSchema.optional(),
  number: SortOrderSchema.optional(),
  extension: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phoneType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPrimary: SortOrderSchema.optional(),
  _count: z.lazy(() => PhoneCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PhoneAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PhoneMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PhoneMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PhoneSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PhoneOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PhoneOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneOrderByWithAggregationInput>;
export const PhoneOrderByWithAggregationInputObjectZodSchema = makeSchema();
