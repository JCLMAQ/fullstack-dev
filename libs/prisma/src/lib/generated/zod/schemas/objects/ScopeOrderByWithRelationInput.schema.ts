import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ApiKeyOrderByRelationAggregateInputObjectSchema as ApiKeyOrderByRelationAggregateInputObjectSchema } from './ApiKeyOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scope: SortOrderSchema.optional(),
  ApiKey: z.lazy(() => ApiKeyOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ScopeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ScopeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeOrderByWithRelationInput>;
export const ScopeOrderByWithRelationInputObjectZodSchema = makeSchema();
