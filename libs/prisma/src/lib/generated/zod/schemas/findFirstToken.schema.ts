import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TokenIncludeObjectSchema as TokenIncludeObjectSchema } from './objects/TokenInclude.schema';
import { TokenOrderByWithRelationInputObjectSchema as TokenOrderByWithRelationInputObjectSchema } from './objects/TokenOrderByWithRelationInput.schema';
import { TokenWhereInputObjectSchema as TokenWhereInputObjectSchema } from './objects/TokenWhereInput.schema';
import { TokenWhereUniqueInputObjectSchema as TokenWhereUniqueInputObjectSchema } from './objects/TokenWhereUniqueInput.schema';
import { TokenScalarFieldEnumSchema } from './enums/TokenScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TokenFindFirstSelectSchema: z.ZodType<Prisma.TokenSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    tokenId: z.boolean().optional(),
    type: z.boolean().optional(),
    emailToken: z.boolean().optional(),
    valid: z.boolean().optional(),
    expiration: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TokenSelect>;

export const TokenFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    tokenId: z.boolean().optional(),
    type: z.boolean().optional(),
    emailToken: z.boolean().optional(),
    valid: z.boolean().optional(),
    expiration: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional()
  }).strict();

export const TokenFindFirstSchema: z.ZodType<Prisma.TokenFindFirstArgs> = z.object({ select: TokenFindFirstSelectSchema.optional(), include: z.lazy(() => TokenIncludeObjectSchema.optional()), orderBy: z.union([TokenOrderByWithRelationInputObjectSchema, TokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TokenWhereInputObjectSchema.optional(), cursor: TokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TokenScalarFieldEnumSchema, TokenScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TokenFindFirstArgs>;

export const TokenFindFirstZodSchema = z.object({ select: TokenFindFirstSelectSchema.optional(), include: z.lazy(() => TokenIncludeObjectSchema.optional()), orderBy: z.union([TokenOrderByWithRelationInputObjectSchema, TokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TokenWhereInputObjectSchema.optional(), cursor: TokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TokenScalarFieldEnumSchema, TokenScalarFieldEnumSchema.array()]).optional() }).strict();