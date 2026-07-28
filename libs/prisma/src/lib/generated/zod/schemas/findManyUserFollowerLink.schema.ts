import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserFollowerLinkIncludeObjectSchema as UserFollowerLinkIncludeObjectSchema } from './objects/UserFollowerLinkInclude.schema';
import { UserFollowerLinkOrderByWithRelationInputObjectSchema as UserFollowerLinkOrderByWithRelationInputObjectSchema } from './objects/UserFollowerLinkOrderByWithRelationInput.schema';
import { UserFollowerLinkWhereInputObjectSchema as UserFollowerLinkWhereInputObjectSchema } from './objects/UserFollowerLinkWhereInput.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './objects/UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkScalarFieldEnumSchema } from './enums/UserFollowerLinkScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFollowerLinkFindManySelectSchema: z.ZodType<Prisma.UserFollowerLinkSelect> = z.object({
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    follower_id: z.boolean().optional(),
    follower: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkSelect>;

export const UserFollowerLinkFindManySelectZodSchema = z.object({
    user_id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    follower_id: z.boolean().optional(),
    follower: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const UserFollowerLinkFindManySchema: z.ZodType<Prisma.UserFollowerLinkFindManyArgs> = z.object({ select: UserFollowerLinkFindManySelectSchema.optional(), include: z.lazy(() => UserFollowerLinkIncludeObjectSchema.optional()), orderBy: z.union([UserFollowerLinkOrderByWithRelationInputObjectSchema, UserFollowerLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserFollowerLinkWhereInputObjectSchema.optional(), cursor: UserFollowerLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserFollowerLinkScalarFieldEnumSchema, UserFollowerLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkFindManyArgs>;

export const UserFollowerLinkFindManyZodSchema = z.object({ select: UserFollowerLinkFindManySelectSchema.optional(), include: z.lazy(() => UserFollowerLinkIncludeObjectSchema.optional()), orderBy: z.union([UserFollowerLinkOrderByWithRelationInputObjectSchema, UserFollowerLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserFollowerLinkWhereInputObjectSchema.optional(), cursor: UserFollowerLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserFollowerLinkScalarFieldEnumSchema, UserFollowerLinkScalarFieldEnumSchema.array()]).optional() }).strict();