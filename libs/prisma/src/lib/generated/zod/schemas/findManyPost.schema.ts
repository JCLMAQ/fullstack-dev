import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PostIncludeObjectSchema as PostIncludeObjectSchema } from './objects/PostInclude.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './objects/PostOrderByWithRelationInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PostFindManySelectSchema: z.ZodType<Prisma.PostSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    groups: z.boolean().optional(),
    orderPost: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    Categories: z.boolean().optional(),
    Comments: z.boolean().optional(),
    LikedBys: z.boolean().optional(),
    Images: z.boolean().optional(),
    Files: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PostSelect>;

export const PostFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    groups: z.boolean().optional(),
    orderPost: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    Categories: z.boolean().optional(),
    Comments: z.boolean().optional(),
    LikedBys: z.boolean().optional(),
    Images: z.boolean().optional(),
    Files: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PostFindManySchema: z.ZodType<Prisma.PostFindManyArgs> = z.object({ select: PostFindManySelectSchema.optional(), include: z.lazy(() => PostIncludeObjectSchema.optional()), orderBy: z.union([PostOrderByWithRelationInputObjectSchema, PostOrderByWithRelationInputObjectSchema.array()]).optional(), where: PostWhereInputObjectSchema.optional(), cursor: PostWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PostFindManyArgs>;

export const PostFindManyZodSchema = z.object({ select: PostFindManySelectSchema.optional(), include: z.lazy(() => PostIncludeObjectSchema.optional()), orderBy: z.union([PostOrderByWithRelationInputObjectSchema, PostOrderByWithRelationInputObjectSchema.array()]).optional(), where: PostWhereInputObjectSchema.optional(), cursor: PostWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()]).optional() }).strict();