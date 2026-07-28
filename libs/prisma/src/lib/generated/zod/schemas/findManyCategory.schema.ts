import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { CategoryIncludeObjectSchema as CategoryIncludeObjectSchema } from './objects/CategoryInclude.schema';
import { CategoryOrderByWithRelationInputObjectSchema as CategoryOrderByWithRelationInputObjectSchema } from './objects/CategoryOrderByWithRelationInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './objects/CategoryWhereInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './objects/CategoryWhereUniqueInput.schema';
import { CategoryScalarFieldEnumSchema } from './enums/CategoryScalarFieldEnum.schema';
import { PostFindManySchema } from './findManyPost.schema';
import { CategoryCountOutputTypeArgsObjectSchema as CategoryCountOutputTypeArgsObjectSchema } from './objects/CategoryCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CategoryFindManySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderCategory: z.boolean().optional(),
    name: z.boolean().optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.CategorySelect>;

export const CategoryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderCategory: z.boolean().optional(),
    name: z.boolean().optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const CategoryFindManySchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({ select: CategoryFindManySelectSchema.optional(), include: z.lazy(() => CategoryIncludeObjectSchema.optional()), orderBy: z.union([CategoryOrderByWithRelationInputObjectSchema, CategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoryWhereInputObjectSchema.optional(), cursor: CategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoryScalarFieldEnumSchema, CategoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.CategoryFindManyArgs>;

export const CategoryFindManyZodSchema = z.object({ select: CategoryFindManySelectSchema.optional(), include: z.lazy(() => CategoryIncludeObjectSchema.optional()), orderBy: z.union([CategoryOrderByWithRelationInputObjectSchema, CategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CategoryWhereInputObjectSchema.optional(), cursor: CategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CategoryScalarFieldEnumSchema, CategoryScalarFieldEnumSchema.array()]).optional() }).strict();