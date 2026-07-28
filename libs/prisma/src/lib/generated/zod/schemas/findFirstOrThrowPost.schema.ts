import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PostIncludeObjectSchema as PostIncludeObjectSchema } from './objects/PostInclude.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './objects/PostOrderByWithRelationInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';
import { GroupFindManySchema } from './findManyGroup.schema';
import { CategoryFindManySchema } from './findManyCategory.schema';
import { CommentFindManySchema } from './findManyComment.schema';
import { UserPostLikeLinkFindManySchema } from './findManyUserPostLikeLink.schema';
import { ImageFindManySchema } from './findManyImage.schema';
import { FileFindManySchema } from './findManyFile.schema';
import { TagValueFindManySchema } from './findManyTagValue.schema';
import { PostCountOutputTypeArgsObjectSchema as PostCountOutputTypeArgsObjectSchema } from './objects/PostCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PostFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PostSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownerId: z.boolean().optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional(),
    groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    orderPost: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    Categories: z.union([z.boolean(), z.lazy(() => CategoryFindManySchema)]).optional(),
    Comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
    LikedBys: z.union([z.boolean(), z.lazy(() => UserPostLikeLinkFindManySchema)]).optional(),
    Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.PostSelect>;

export const PostFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownerId: z.boolean().optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional(),
    groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    orderPost: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    Categories: z.union([z.boolean(), z.lazy(() => CategoryFindManySchema)]).optional(),
    Comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
    LikedBys: z.union([z.boolean(), z.lazy(() => UserPostLikeLinkFindManySchema)]).optional(),
    Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const PostFindFirstOrThrowSchema: z.ZodType<Prisma.PostFindFirstOrThrowArgs> = z.object({ select: PostFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PostIncludeObjectSchema.optional()), orderBy: z.union([PostOrderByWithRelationInputObjectSchema, PostOrderByWithRelationInputObjectSchema.array()]).optional(), where: PostWhereInputObjectSchema.optional(), cursor: PostWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PostFindFirstOrThrowArgs>;

export const PostFindFirstOrThrowZodSchema = z.object({ select: PostFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PostIncludeObjectSchema.optional()), orderBy: z.union([PostOrderByWithRelationInputObjectSchema, PostOrderByWithRelationInputObjectSchema.array()]).optional(), where: PostWhereInputObjectSchema.optional(), cursor: PostWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()]).optional() }).strict();