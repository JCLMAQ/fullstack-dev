import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesIncludeObjectSchema as TagCategoriesIncludeObjectSchema } from './objects/TagCategoriesInclude.schema';
import { TagCategoriesOrderByWithRelationInputObjectSchema as TagCategoriesOrderByWithRelationInputObjectSchema } from './objects/TagCategoriesOrderByWithRelationInput.schema';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './objects/TagCategoriesWhereInput.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';
import { TagCategoriesScalarFieldEnumSchema } from './enums/TagCategoriesScalarFieldEnum.schema';
import { TagValueFindManySchema } from './findManyTagValue.schema';
import { TagCategoriesCountOutputTypeArgsObjectSchema as TagCategoriesCountOutputTypeArgsObjectSchema } from './objects/TagCategoriesCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagCategoriesFindManySelectSchema: z.ZodType<Prisma.TagCategoriesSelect> = z.object({
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
    TagValues: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TagCategoriesCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.TagCategoriesSelect>;

export const TagCategoriesFindManySelectZodSchema = z.object({
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
    TagValues: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TagCategoriesCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const TagCategoriesFindManySchema: z.ZodType<Prisma.TagCategoriesFindManyArgs> = z.object({ select: TagCategoriesFindManySelectSchema.optional(), include: z.lazy(() => TagCategoriesIncludeObjectSchema.optional()), orderBy: z.union([TagCategoriesOrderByWithRelationInputObjectSchema, TagCategoriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagCategoriesWhereInputObjectSchema.optional(), cursor: TagCategoriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagCategoriesScalarFieldEnumSchema, TagCategoriesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesFindManyArgs>;

export const TagCategoriesFindManyZodSchema = z.object({ select: TagCategoriesFindManySelectSchema.optional(), include: z.lazy(() => TagCategoriesIncludeObjectSchema.optional()), orderBy: z.union([TagCategoriesOrderByWithRelationInputObjectSchema, TagCategoriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagCategoriesWhereInputObjectSchema.optional(), cursor: TagCategoriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagCategoriesScalarFieldEnumSchema, TagCategoriesScalarFieldEnumSchema.array()]).optional() }).strict();