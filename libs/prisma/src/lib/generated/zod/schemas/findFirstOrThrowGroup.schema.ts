import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './objects/GroupInclude.schema';
import { GroupOrderByWithRelationInputObjectSchema as GroupOrderByWithRelationInputObjectSchema } from './objects/GroupOrderByWithRelationInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';
import { GroupScalarFieldEnumSchema } from './enums/GroupScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GroupSelect> = z.object({
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
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    Members: z.boolean().optional(),
    Tasks: z.boolean().optional(),
    Todos: z.boolean().optional(),
    Posts: z.boolean().optional(),
    Files: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GroupSelect>;

export const GroupFindFirstOrThrowSelectZodSchema = z.object({
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
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    Members: z.boolean().optional(),
    Tasks: z.boolean().optional(),
    Todos: z.boolean().optional(),
    Posts: z.boolean().optional(),
    Files: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GroupFindFirstOrThrowSchema: z.ZodType<Prisma.GroupFindFirstOrThrowArgs> = z.object({ select: GroupFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GroupIncludeObjectSchema.optional()), orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupScalarFieldEnumSchema, GroupScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupFindFirstOrThrowArgs>;

export const GroupFindFirstOrThrowZodSchema = z.object({ select: GroupFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GroupIncludeObjectSchema.optional()), orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupScalarFieldEnumSchema, GroupScalarFieldEnumSchema.array()]).optional() }).strict();