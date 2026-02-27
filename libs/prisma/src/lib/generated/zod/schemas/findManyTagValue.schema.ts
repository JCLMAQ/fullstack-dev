import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueOrderByWithRelationInputObjectSchema as TagValueOrderByWithRelationInputObjectSchema } from './objects/TagValueOrderByWithRelationInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './objects/TagValueWhereInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';
import { TagValueScalarFieldEnumSchema } from './enums/TagValueScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagValueFindManySelectSchema: z.ZodType<Prisma.TagValueSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    name: z.boolean().optional(),
    position: z.boolean().optional(),
    color: z.boolean().optional(),
    tagCategories: z.boolean().optional(),
    tagCategoriesId: z.boolean().optional(),
    mainTag: z.boolean().optional(),
    mainTagId: z.boolean().optional(),
    SubTags: z.boolean().optional(),
    tagTranslates: z.boolean().optional(),
    Todos: z.boolean().optional(),
    Tasks: z.boolean().optional(),
    Groups: z.boolean().optional(),
    Posts: z.boolean().optional(),
    Files: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TagValueSelect>;

export const TagValueFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    name: z.boolean().optional(),
    position: z.boolean().optional(),
    color: z.boolean().optional(),
    tagCategories: z.boolean().optional(),
    tagCategoriesId: z.boolean().optional(),
    mainTag: z.boolean().optional(),
    mainTagId: z.boolean().optional(),
    SubTags: z.boolean().optional(),
    tagTranslates: z.boolean().optional(),
    Todos: z.boolean().optional(),
    Tasks: z.boolean().optional(),
    Groups: z.boolean().optional(),
    Posts: z.boolean().optional(),
    Files: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TagValueFindManySchema: z.ZodType<Prisma.TagValueFindManyArgs> = z.object({ select: TagValueFindManySelectSchema.optional(), include: z.lazy(() => TagValueIncludeObjectSchema.optional()), orderBy: z.union([TagValueOrderByWithRelationInputObjectSchema, TagValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagValueWhereInputObjectSchema.optional(), cursor: TagValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagValueScalarFieldEnumSchema, TagValueScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagValueFindManyArgs>;

export const TagValueFindManyZodSchema = z.object({ select: TagValueFindManySelectSchema.optional(), include: z.lazy(() => TagValueIncludeObjectSchema.optional()), orderBy: z.union([TagValueOrderByWithRelationInputObjectSchema, TagValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagValueWhereInputObjectSchema.optional(), cursor: TagValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagValueScalarFieldEnumSchema, TagValueScalarFieldEnumSchema.array()]).optional() }).strict();