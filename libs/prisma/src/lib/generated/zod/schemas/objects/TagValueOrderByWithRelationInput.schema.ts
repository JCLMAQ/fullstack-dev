import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagCategoriesOrderByWithRelationInputObjectSchema as TagCategoriesOrderByWithRelationInputObjectSchema } from './TagCategoriesOrderByWithRelationInput.schema';
import { TagValueOrderByRelationAggregateInputObjectSchema as TagValueOrderByRelationAggregateInputObjectSchema } from './TagValueOrderByRelationAggregateInput.schema';
import { TagTranslateOrderByRelationAggregateInputObjectSchema as TagTranslateOrderByRelationAggregateInputObjectSchema } from './TagTranslateOrderByRelationAggregateInput.schema';
import { TodoOrderByRelationAggregateInputObjectSchema as TodoOrderByRelationAggregateInputObjectSchema } from './TodoOrderByRelationAggregateInput.schema';
import { TaskOrderByRelationAggregateInputObjectSchema as TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { PostOrderByRelationAggregateInputObjectSchema as PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema'

const tagvalueorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  tagCategoriesId: SortOrderSchema.optional(),
  mainTagId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tagCategories: z.lazy(() => TagCategoriesOrderByWithRelationInputObjectSchema).optional(),
  mainTag: z.lazy(() => TagValueOrderByWithRelationInputObjectSchema).optional(),
  SubTags: z.lazy(() => TagValueOrderByRelationAggregateInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateOrderByRelationAggregateInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoOrderByRelationAggregateInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskOrderByRelationAggregateInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  Posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
  Files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TagValueOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TagValueOrderByWithRelationInput> = tagvalueorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.TagValueOrderByWithRelationInput>;
export const TagValueOrderByWithRelationInputObjectZodSchema = tagvalueorderbywithrelationinputSchema;
