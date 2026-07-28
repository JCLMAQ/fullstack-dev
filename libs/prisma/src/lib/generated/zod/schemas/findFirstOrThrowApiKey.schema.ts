import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ApiKeyIncludeObjectSchema as ApiKeyIncludeObjectSchema } from './objects/ApiKeyInclude.schema';
import { ApiKeyOrderByWithRelationInputObjectSchema as ApiKeyOrderByWithRelationInputObjectSchema } from './objects/ApiKeyOrderByWithRelationInput.schema';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';
import { ApiKeyScalarFieldEnumSchema } from './enums/ApiKeyScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { ScopeFindManySchema } from './findManyScope.schema';
import { ApiKeyCountOutputTypeArgsObjectSchema as ApiKeyCountOutputTypeArgsObjectSchema } from './objects/ApiKeyCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ApiKeyFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ApiKeySelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    key: z.boolean().optional(),
    uuid: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    Scopes: z.union([z.boolean(), z.lazy(() => ScopeFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ApiKeyCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ApiKeySelect>;

export const ApiKeyFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    key: z.boolean().optional(),
    uuid: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    Scopes: z.union([z.boolean(), z.lazy(() => ScopeFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => ApiKeyCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ApiKeyFindFirstOrThrowSchema: z.ZodType<Prisma.ApiKeyFindFirstOrThrowArgs> = z.object({ select: ApiKeyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ApiKeyIncludeObjectSchema.optional()), orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ApiKeyScalarFieldEnumSchema, ApiKeyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyFindFirstOrThrowArgs>;

export const ApiKeyFindFirstOrThrowZodSchema = z.object({ select: ApiKeyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ApiKeyIncludeObjectSchema.optional()), orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ApiKeyScalarFieldEnumSchema, ApiKeyScalarFieldEnumSchema.array()]).optional() }).strict();