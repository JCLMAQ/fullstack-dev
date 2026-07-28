import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AccountValidationCountOrderByAggregateInputObjectSchema as AccountValidationCountOrderByAggregateInputObjectSchema } from './AccountValidationCountOrderByAggregateInput.schema';
import { AccountValidationAvgOrderByAggregateInputObjectSchema as AccountValidationAvgOrderByAggregateInputObjectSchema } from './AccountValidationAvgOrderByAggregateInput.schema';
import { AccountValidationMaxOrderByAggregateInputObjectSchema as AccountValidationMaxOrderByAggregateInputObjectSchema } from './AccountValidationMaxOrderByAggregateInput.schema';
import { AccountValidationMinOrderByAggregateInputObjectSchema as AccountValidationMinOrderByAggregateInputObjectSchema } from './AccountValidationMinOrderByAggregateInput.schema';
import { AccountValidationSumOrderByAggregateInputObjectSchema as AccountValidationSumOrderByAggregateInputObjectSchema } from './AccountValidationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isValidated: SortOrderSchema.optional(),
  emailToken: SortOrderSchema.optional(),
  timeStamp: SortOrderSchema.optional(),
  _count: z.lazy(() => AccountValidationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AccountValidationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountValidationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountValidationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AccountValidationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountValidationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountValidationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountValidationOrderByWithAggregationInput>;
export const AccountValidationOrderByWithAggregationInputObjectZodSchema = makeSchema();
