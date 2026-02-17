import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserSecretCountOrderByAggregateInputObjectSchema as UserSecretCountOrderByAggregateInputObjectSchema } from './UserSecretCountOrderByAggregateInput.schema';
import { UserSecretAvgOrderByAggregateInputObjectSchema as UserSecretAvgOrderByAggregateInputObjectSchema } from './UserSecretAvgOrderByAggregateInput.schema';
import { UserSecretMaxOrderByAggregateInputObjectSchema as UserSecretMaxOrderByAggregateInputObjectSchema } from './UserSecretMaxOrderByAggregateInput.schema';
import { UserSecretMinOrderByAggregateInputObjectSchema as UserSecretMinOrderByAggregateInputObjectSchema } from './UserSecretMinOrderByAggregateInput.schema';
import { UserSecretSumOrderByAggregateInputObjectSchema as UserSecretSumOrderByAggregateInputObjectSchema } from './UserSecretSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  pwdHash: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  salt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isAdmin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => UserSecretCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => UserSecretAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserSecretMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserSecretMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => UserSecretSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserSecretOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserSecretOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretOrderByWithAggregationInput>;
export const UserSecretOrderByWithAggregationInputObjectZodSchema = makeSchema();
