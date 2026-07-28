import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './PostOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeleted: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orderComment: SortOrderSchema.optional(),
  content: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postId: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  post: z.lazy(() => PostOrderByWithRelationInputObjectSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  Files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CommentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentOrderByWithRelationInput>;
export const CommentOrderByWithRelationInputObjectZodSchema = makeSchema();
