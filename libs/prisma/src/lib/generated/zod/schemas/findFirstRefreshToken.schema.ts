import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RefreshTokenOrderByWithRelationInputObjectSchema as RefreshTokenOrderByWithRelationInputObjectSchema } from './objects/RefreshTokenOrderByWithRelationInput.schema';
import { RefreshTokenWhereInputObjectSchema as RefreshTokenWhereInputObjectSchema } from './objects/RefreshTokenWhereInput.schema';
import { RefreshTokenWhereUniqueInputObjectSchema as RefreshTokenWhereUniqueInputObjectSchema } from './objects/RefreshTokenWhereUniqueInput.schema';
import { RefreshTokenScalarFieldEnumSchema } from './enums/RefreshTokenScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RefreshTokenFindFirstSelectSchema: z.ZodType<Prisma.RefreshTokenSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    userId: z.boolean().optional(),
    tokenId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RefreshTokenSelect>;

export const RefreshTokenFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    userId: z.boolean().optional(),
    tokenId: z.boolean().optional()
  }).strict();

export const RefreshTokenFindFirstSchema: z.ZodType<Prisma.RefreshTokenFindFirstArgs> = z.object({ select: RefreshTokenFindFirstSelectSchema.optional(),  orderBy: z.union([RefreshTokenOrderByWithRelationInputObjectSchema, RefreshTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefreshTokenWhereInputObjectSchema.optional(), cursor: RefreshTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RefreshTokenScalarFieldEnumSchema, RefreshTokenScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RefreshTokenFindFirstArgs>;

export const RefreshTokenFindFirstZodSchema = z.object({ select: RefreshTokenFindFirstSelectSchema.optional(),  orderBy: z.union([RefreshTokenOrderByWithRelationInputObjectSchema, RefreshTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefreshTokenWhereInputObjectSchema.optional(), cursor: RefreshTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RefreshTokenScalarFieldEnumSchema, RefreshTokenScalarFieldEnumSchema.array()]).optional() }).strict();