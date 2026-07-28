import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TaskIncludeObjectSchema as TaskIncludeObjectSchema } from './objects/TaskInclude.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './objects/TaskOrderByWithRelationInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskScalarFieldEnumSchema } from './enums/TaskScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';
import { GroupFindManySchema } from './findManyGroup.schema';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './objects/TaskArgs.schema';
import { TaskFindManySchema } from './findManyTask.schema';
import { UserTaskLinkFindManySchema } from './findManyUserTaskLink.schema';
import { TodoArgsObjectSchema as TodoArgsObjectSchema } from './objects/TodoArgs.schema';
import { TagValueFindManySchema } from './findManyTagValue.schema';
import { TaskCountOutputTypeArgsObjectSchema as TaskCountOutputTypeArgsObjectSchema } from './objects/TaskCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownerId: z.boolean().optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional(),
    groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    orderTask: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    taskState: z.boolean().optional(),
    mainTask: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
    mainTaskId: z.boolean().optional(),
    SubTasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Users: z.union([z.boolean(), z.lazy(() => UserTaskLinkFindManySchema)]).optional(),
    todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
    todoId: z.boolean().optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskSelect>;

export const TaskFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownerId: z.boolean().optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional(),
    groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    orderTask: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    taskState: z.boolean().optional(),
    mainTask: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
    mainTaskId: z.boolean().optional(),
    SubTasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Users: z.union([z.boolean(), z.lazy(() => UserTaskLinkFindManySchema)]).optional(),
    todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
    todoId: z.boolean().optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const TaskFindFirstOrThrowSchema: z.ZodType<Prisma.TaskFindFirstOrThrowArgs> = z.object({ select: TaskFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TaskIncludeObjectSchema.optional()), orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskFindFirstOrThrowArgs>;

export const TaskFindFirstOrThrowZodSchema = z.object({ select: TaskFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TaskIncludeObjectSchema.optional()), orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict();