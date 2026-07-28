import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueOrderByWithRelationInputObjectSchema as TagValueOrderByWithRelationInputObjectSchema } from './objects/TagValueOrderByWithRelationInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './objects/TagValueWhereInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';
import { TagValueScalarFieldEnumSchema } from './enums/TagValueScalarFieldEnum.schema';
import { TagCategoriesArgsObjectSchema as TagCategoriesArgsObjectSchema } from './objects/TagCategoriesArgs.schema';
import { TagValueArgsObjectSchema as TagValueArgsObjectSchema } from './objects/TagValueArgs.schema';
import { TagTranslateFindManySchema } from './findManyTagTranslate.schema';
import { TodoFindManySchema } from './findManyTodo.schema';
import { TaskFindManySchema } from './findManyTask.schema';
import { GroupFindManySchema } from './findManyGroup.schema';
import { PostFindManySchema } from './findManyPost.schema';
import { FileFindManySchema } from './findManyFile.schema';
import { TagValueCountOutputTypeArgsObjectSchema as TagValueCountOutputTypeArgsObjectSchema } from './objects/TagValueCountOutputTypeArgs.schema';

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
    tagCategories: z.union([z.boolean(), z.lazy(() => TagCategoriesArgsObjectSchema)]).optional(),
    tagCategoriesId: z.boolean().optional(),
    mainTag: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional(),
    mainTagId: z.boolean().optional(),
    SubTags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    tagTranslates: z.union([z.boolean(), z.lazy(() => TagTranslateFindManySchema)]).optional(),
    Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeArgsObjectSchema)]).optional()
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
    tagCategories: z.union([z.boolean(), z.lazy(() => TagCategoriesArgsObjectSchema)]).optional(),
    tagCategoriesId: z.boolean().optional(),
    mainTag: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional(),
    mainTagId: z.boolean().optional(),
    SubTags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    tagTranslates: z.union([z.boolean(), z.lazy(() => TagTranslateFindManySchema)]).optional(),
    Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const TagValueFindManySchema: z.ZodType<Prisma.TagValueFindManyArgs> = z.object({ select: TagValueFindManySelectSchema.optional(), include: z.lazy(() => TagValueIncludeObjectSchema.optional()), orderBy: z.union([TagValueOrderByWithRelationInputObjectSchema, TagValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagValueWhereInputObjectSchema.optional(), cursor: TagValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagValueScalarFieldEnumSchema, TagValueScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TagValueFindManyArgs>;

export const TagValueFindManyZodSchema = z.object({ select: TagValueFindManySelectSchema.optional(), include: z.lazy(() => TagValueIncludeObjectSchema.optional()), orderBy: z.union([TagValueOrderByWithRelationInputObjectSchema, TagValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagValueWhereInputObjectSchema.optional(), cursor: TagValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TagValueScalarFieldEnumSchema, TagValueScalarFieldEnumSchema.array()]).optional() }).strict();