import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ScopeOrderByRelationAggregateInputObjectSchema as ScopeOrderByRelationAggregateInputObjectSchema } from './ScopeOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  key: SortOrderSchema.optional(),
  uuid: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  Scopes: z.lazy(() => ScopeOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ApiKeyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ApiKeyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyOrderByWithRelationInput>;
export const ApiKeyOrderByWithRelationInputObjectZodSchema = makeSchema();
