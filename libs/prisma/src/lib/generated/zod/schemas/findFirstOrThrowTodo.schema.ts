import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './objects/TodoInclude.schema';
import { TodoOrderByWithRelationInputObjectSchema as TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';
import { GroupFindManySchema } from './findManyGroup.schema';
import { TodoArgsObjectSchema as TodoArgsObjectSchema } from './objects/TodoArgs.schema';
import { TodoFindManySchema } from './findManyTodo.schema';
import { UserTodoLinkFindManySchema } from './findManyUserTodoLink.schema';
import { TaskFindManySchema } from './findManyTask.schema';
import { TagValueFindManySchema } from './findManyTagValue.schema';
import { TodoCountOutputTypeArgsObjectSchema as TodoCountOutputTypeArgsObjectSchema } from './objects/TodoCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
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
    orderTodo: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    todoState: z.boolean().optional(),
    mainTodo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
    mainTodoId: z.boolean().optional(),
    SubTodos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Users: z.union([z.boolean(), z.lazy(() => UserTodoLinkFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.TodoSelect>;

export const TodoFindFirstOrThrowSelectZodSchema = z.object({
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
    orderTodo: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    todoState: z.boolean().optional(),
    mainTodo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
    mainTodoId: z.boolean().optional(),
    SubTodos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Users: z.union([z.boolean(), z.lazy(() => UserTodoLinkFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const TodoFindFirstOrThrowSchema: z.ZodType<Prisma.TodoFindFirstOrThrowArgs> = z.object({ select: TodoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TodoIncludeObjectSchema.optional()), orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TodoFindFirstOrThrowArgs>;

export const TodoFindFirstOrThrowZodSchema = z.object({ select: TodoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TodoIncludeObjectSchema.optional()), orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict();