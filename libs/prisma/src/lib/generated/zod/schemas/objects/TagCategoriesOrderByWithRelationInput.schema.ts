import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagValueOrderByRelationAggregateInputObjectSchema as TagValueOrderByRelationAggregateInputObjectSchema } from './TagValueOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modelName: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  recordId: SortOrderSchema.optional(),
  TagValues: z.lazy(() => TagValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TagCategoriesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagCategoriesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesOrderByWithRelationInput>;
export const TagCategoriesOrderByWithRelationInputObjectZodSchema = makeSchema();
