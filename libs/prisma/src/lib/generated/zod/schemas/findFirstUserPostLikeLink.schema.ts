import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './objects/UserPostLikeLinkInclude.schema';
import { UserPostLikeLinkOrderByWithRelationInputObjectSchema as UserPostLikeLinkOrderByWithRelationInputObjectSchema } from './objects/UserPostLikeLinkOrderByWithRelationInput.schema';
import { UserPostLikeLinkWhereInputObjectSchema as UserPostLikeLinkWhereInputObjectSchema } from './objects/UserPostLikeLinkWhereInput.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './objects/UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkScalarFieldEnumSchema } from './enums/UserPostLikeLinkScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './objects/PostArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserPostLikeLinkFindFirstSelectSchema: z.ZodType<Prisma.UserPostLikeLinkSelect> = z.object({
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    post_id: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkSelect>;

export const UserPostLikeLinkFindFirstSelectZodSchema = z.object({
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    post_id: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const UserPostLikeLinkFindFirstSchema: z.ZodType<Prisma.UserPostLikeLinkFindFirstArgs> = z.object({ select: UserPostLikeLinkFindFirstSelectSchema.optional(), include: z.lazy(() => UserPostLikeLinkIncludeObjectSchema.optional()), orderBy: z.union([UserPostLikeLinkOrderByWithRelationInputObjectSchema, UserPostLikeLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserPostLikeLinkWhereInputObjectSchema.optional(), cursor: UserPostLikeLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserPostLikeLinkScalarFieldEnumSchema, UserPostLikeLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkFindFirstArgs>;

export const UserPostLikeLinkFindFirstZodSchema = z.object({ select: UserPostLikeLinkFindFirstSelectSchema.optional(), include: z.lazy(() => UserPostLikeLinkIncludeObjectSchema.optional()), orderBy: z.union([UserPostLikeLinkOrderByWithRelationInputObjectSchema, UserPostLikeLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserPostLikeLinkWhereInputObjectSchema.optional(), cursor: UserPostLikeLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserPostLikeLinkScalarFieldEnumSchema, UserPostLikeLinkScalarFieldEnumSchema.array()]).optional() }).strict();