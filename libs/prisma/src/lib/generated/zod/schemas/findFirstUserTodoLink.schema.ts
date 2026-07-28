import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './objects/UserTodoLinkInclude.schema';
import { UserTodoLinkOrderByWithRelationInputObjectSchema as UserTodoLinkOrderByWithRelationInputObjectSchema } from './objects/UserTodoLinkOrderByWithRelationInput.schema';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './objects/UserTodoLinkWhereInput.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './objects/UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkScalarFieldEnumSchema } from './enums/UserTodoLinkScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { TodoArgsObjectSchema as TodoArgsObjectSchema } from './objects/TodoArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserTodoLinkFindFirstSelectSchema: z.ZodType<Prisma.UserTodoLinkSelect> = z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
    todoId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkSelect>;

export const UserTodoLinkFindFirstSelectZodSchema = z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
    todoId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict();

export const UserTodoLinkFindFirstSchema: z.ZodType<Prisma.UserTodoLinkFindFirstArgs> = z.object({ select: UserTodoLinkFindFirstSelectSchema.optional(), include: z.lazy(() => UserTodoLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTodoLinkOrderByWithRelationInputObjectSchema, UserTodoLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTodoLinkWhereInputObjectSchema.optional(), cursor: UserTodoLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTodoLinkScalarFieldEnumSchema, UserTodoLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkFindFirstArgs>;

export const UserTodoLinkFindFirstZodSchema = z.object({ select: UserTodoLinkFindFirstSelectSchema.optional(), include: z.lazy(() => UserTodoLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTodoLinkOrderByWithRelationInputObjectSchema, UserTodoLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTodoLinkWhereInputObjectSchema.optional(), cursor: UserTodoLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTodoLinkScalarFieldEnumSchema, UserTodoLinkScalarFieldEnumSchema.array()]).optional() }).strict();