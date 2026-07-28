import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { CommentIncludeObjectSchema as CommentIncludeObjectSchema } from './objects/CommentInclude.schema';
import { CommentOrderByWithRelationInputObjectSchema as CommentOrderByWithRelationInputObjectSchema } from './objects/CommentOrderByWithRelationInput.schema';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './objects/CommentWhereInput.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';
import { CommentScalarFieldEnumSchema } from './enums/CommentScalarFieldEnum.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './objects/PostArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { FileFindManySchema } from './findManyFile.schema';
import { CommentCountOutputTypeArgsObjectSchema as CommentCountOutputTypeArgsObjectSchema } from './objects/CommentCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CommentFindFirstSelectSchema: z.ZodType<Prisma.CommentSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderComment: z.boolean().optional(),
    content: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
    postId: z.boolean().optional(),
    author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    authorId: z.boolean().optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CommentCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.CommentSelect>;

export const CommentFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderComment: z.boolean().optional(),
    content: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
    postId: z.boolean().optional(),
    author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    authorId: z.boolean().optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CommentCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const CommentFindFirstSchema: z.ZodType<Prisma.CommentFindFirstArgs> = z.object({ select: CommentFindFirstSelectSchema.optional(), include: z.lazy(() => CommentIncludeObjectSchema.optional()), orderBy: z.union([CommentOrderByWithRelationInputObjectSchema, CommentOrderByWithRelationInputObjectSchema.array()]).optional(), where: CommentWhereInputObjectSchema.optional(), cursor: CommentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CommentScalarFieldEnumSchema, CommentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CommentFindFirstArgs>;

export const CommentFindFirstZodSchema = z.object({ select: CommentFindFirstSelectSchema.optional(), include: z.lazy(() => CommentIncludeObjectSchema.optional()), orderBy: z.union([CommentOrderByWithRelationInputObjectSchema, CommentOrderByWithRelationInputObjectSchema.array()]).optional(), where: CommentWhereInputObjectSchema.optional(), cursor: CommentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CommentScalarFieldEnumSchema, CommentScalarFieldEnumSchema.array()]).optional() }).strict();