import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesOrderByWithRelationInputObjectSchema as TagCategoriesOrderByWithRelationInputObjectSchema } from './objects/TagCategoriesOrderByWithRelationInput.schema';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './objects/TagCategoriesWhereInput.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';
import { TagCategoriesScalarFieldEnumSchema } from './enums/TagCategoriesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagCategoriesFindFirstSelectSchema: z.ZodType<Prisma.TagCategoriesSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    modelName: z.boolean().optional(),
    description: z.boolean().optional(),
    recordId: z.boolean().optional(),
    TagValues: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TagCategoriesSelect>;

export const TagCategoriesFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    modelName: z.boolean().optional(),
    description: z.boolean().optional(),
    recordId: z.boolean().optional(),
    TagValues: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TagCategoriesFindFirstSchema: z.ZodType<Prisma.TagCategoriesFindFirstArgs> = z.object({ select: TagCategoriesFindFirstSelectSchema.optional(), include: z.lazy(() => TagCategoriesIncludeObjectSchema.optional()), orderBy: z.union([TagCategoriesOrderByWithRelationInputObjectSchema, TagCategoriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagCategoriesWhereInputObjectSchema.optional(), cursor: TagCategoriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagCategoriesScalarFieldEnumSchema, TagCategoriesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesFindFirstArgs>;

export const TagCategoriesFindFirstZodSchema = z.object({ select: TagCategoriesFindFirstSelectSchema.optional(), include: z.lazy(() => TagCategoriesIncludeObjectSchema.optional()), orderBy: z.union([TagCategoriesOrderByWithRelationInputObjectSchema, TagCategoriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagCategoriesWhereInputObjectSchema.optional(), cursor: TagCategoriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagCategoriesScalarFieldEnumSchema, TagCategoriesScalarFieldEnumSchema.array()]).optional() }).strict();