import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './objects/GroupInclude.schema';
import { GroupOrderByWithRelationInputObjectSchema as GroupOrderByWithRelationInputObjectSchema } from './objects/GroupOrderByWithRelationInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';
import { GroupScalarFieldEnumSchema } from './enums/GroupScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { UserFindManySchema } from './findManyUser.schema';
import { TaskFindManySchema } from './findManyTask.schema';
import { TodoFindManySchema } from './findManyTodo.schema';
import { PostFindManySchema } from './findManyPost.schema';
import { FileFindManySchema } from './findManyFile.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';
import { TagValueFindManySchema } from './findManyTagValue.schema';
import { GroupCountOutputTypeArgsObjectSchema as GroupCountOutputTypeArgsObjectSchema } from './objects/GroupCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupFindFirstSelectSchema: z.ZodType<Prisma.GroupSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderGroup: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownerId: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    Members: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.GroupSelect>;

export const GroupFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderGroup: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownerId: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    Members: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const GroupFindFirstSchema: z.ZodType<Prisma.GroupFindFirstArgs> = z.object({ select: GroupFindFirstSelectSchema.optional(), include: z.lazy(() => GroupIncludeObjectSchema.optional()), orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupScalarFieldEnumSchema, GroupScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupFindFirstArgs>;

export const GroupFindFirstZodSchema = z.object({ select: GroupFindFirstSelectSchema.optional(), include: z.lazy(() => GroupIncludeObjectSchema.optional()), orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupScalarFieldEnumSchema, GroupScalarFieldEnumSchema.array()]).optional() }).strict();