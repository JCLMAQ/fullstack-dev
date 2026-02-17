import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './objects/ScopeInclude.schema';
import { ScopeOrderByWithRelationInputObjectSchema as ScopeOrderByWithRelationInputObjectSchema } from './objects/ScopeOrderByWithRelationInput.schema';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './objects/ScopeWhereInput.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';
import { ScopeScalarFieldEnumSchema } from './enums/ScopeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScopeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ScopeSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    scope: z.boolean().optional(),
    ApiKey: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ScopeSelect>;

export const ScopeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    scope: z.boolean().optional(),
    ApiKey: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ScopeFindFirstOrThrowSchema: z.ZodType<Prisma.ScopeFindFirstOrThrowArgs> = z.object({ select: ScopeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ScopeIncludeObjectSchema.optional()), orderBy: z.union([ScopeOrderByWithRelationInputObjectSchema, ScopeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScopeWhereInputObjectSchema.optional(), cursor: ScopeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScopeScalarFieldEnumSchema, ScopeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ScopeFindFirstOrThrowArgs>;

export const ScopeFindFirstOrThrowZodSchema = z.object({ select: ScopeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ScopeIncludeObjectSchema.optional()), orderBy: z.union([ScopeOrderByWithRelationInputObjectSchema, ScopeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScopeWhereInputObjectSchema.optional(), cursor: ScopeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScopeScalarFieldEnumSchema, ScopeScalarFieldEnumSchema.array()]).optional() }).strict();