import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './objects/TodoInclude.schema';
import { TodoOrderByWithRelationInputObjectSchema as TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';

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
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    groups: z.boolean().optional(),
    orderTodo: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    todoState: z.boolean().optional(),
    mainTodo: z.boolean().optional(),
    mainTodoId: z.boolean().optional(),
    SubTodos: z.boolean().optional(),
    Users: z.boolean().optional(),
    Tasks: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
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
    owner: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    groups: z.boolean().optional(),
    orderTodo: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    todoState: z.boolean().optional(),
    mainTodo: z.boolean().optional(),
    mainTodoId: z.boolean().optional(),
    SubTodos: z.boolean().optional(),
    Users: z.boolean().optional(),
    Tasks: z.boolean().optional(),
    Tags: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TodoFindFirstOrThrowSchema: z.ZodType<Prisma.TodoFindFirstOrThrowArgs> = z.object({ select: TodoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TodoIncludeObjectSchema.optional()), orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TodoFindFirstOrThrowArgs>;

export const TodoFindFirstOrThrowZodSchema = z.object({ select: TodoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TodoIncludeObjectSchema.optional()), orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict();