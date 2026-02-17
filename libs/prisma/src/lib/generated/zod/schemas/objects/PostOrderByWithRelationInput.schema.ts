import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { CategoryOrderByRelationAggregateInputObjectSchema as CategoryOrderByRelationAggregateInputObjectSchema } from './CategoryOrderByRelationAggregateInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema as CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { UserPostLikeLinkOrderByRelationAggregateInputObjectSchema as UserPostLikeLinkOrderByRelationAggregateInputObjectSchema } from './UserPostLikeLinkOrderByRelationAggregateInput.schema';
import { ImageOrderByRelationAggregateInputObjectSchema as ImageOrderByRelationAggregateInputObjectSchema } from './ImageOrderByRelationAggregateInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema';
import { TagValueOrderByRelationAggregateInputObjectSchema as TagValueOrderByRelationAggregateInputObjectSchema } from './TagValueOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  orgId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orderPost: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: SortOrderSchema.optional(),
  content: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  Categories: z.lazy(() => CategoryOrderByRelationAggregateInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentOrderByRelationAggregateInputObjectSchema).optional(),
  LikedBys: z.lazy(() => UserPostLikeLinkOrderByRelationAggregateInputObjectSchema).optional(),
  Images: z.lazy(() => ImageOrderByRelationAggregateInputObjectSchema).optional(),
  Files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PostOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByWithRelationInput>;
export const PostOrderByWithRelationInputObjectZodSchema = makeSchema();
