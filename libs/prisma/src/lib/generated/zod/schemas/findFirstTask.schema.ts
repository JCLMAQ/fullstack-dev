import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TaskIncludeObjectSchema as TaskIncludeObjectSchema } from './objects/TaskInclude.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './objects/TaskOrderByWithRelationInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskScalarFieldEnumSchema } from './enums/TaskScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskFindFirstSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    groups: z.boolean().optional(),
    orderTask: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    taskState: z.boolean().optional(),
    mainTask: z.boolean().optional(),
    mainTaskId: z.boolean().optional(),
    SubTasks: z.boolean().optional(),
    Users: z.boolean().optional(),
    todo: z.boolean().optional(),
    todoId: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskSelect>;

export const TaskFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    groups: z.boolean().optional(),
    orderTask: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    taskState: z.boolean().optional(),
    mainTask: z.boolean().optional(),
    mainTaskId: z.boolean().optional(),
    SubTasks: z.boolean().optional(),
    Users: z.boolean().optional(),
    todo: z.boolean().optional(),
    todoId: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TaskFindFirstSchema: z.ZodType<Prisma.TaskFindFirstArgs> = z.object({ select: TaskFindFirstSelectSchema.optional(), include: z.lazy(() => TaskIncludeObjectSchema.optional()), orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskFindFirstArgs>;

export const TaskFindFirstZodSchema = z.object({ select: TaskFindFirstSelectSchema.optional(), include: z.lazy(() => TaskIncludeObjectSchema.optional()), orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict();