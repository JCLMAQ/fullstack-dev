import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './objects/UserTodoLinkInclude.schema';
import { UserTodoLinkOrderByWithRelationInputObjectSchema as UserTodoLinkOrderByWithRelationInputObjectSchema } from './objects/UserTodoLinkOrderByWithRelationInput.schema';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './objects/UserTodoLinkWhereInput.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './objects/UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkScalarFieldEnumSchema } from './enums/UserTodoLinkScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserTodoLinkFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserTodoLinkSelect> = z.object({
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    todo: z.boolean().optional(),
    todoId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkSelect>;

export const UserTodoLinkFindFirstOrThrowSelectZodSchema = z.object({
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    todo: z.boolean().optional(),
    todoId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict();

export const UserTodoLinkFindFirstOrThrowSchema: z.ZodType<Prisma.UserTodoLinkFindFirstOrThrowArgs> = z.object({ select: UserTodoLinkFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserTodoLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTodoLinkOrderByWithRelationInputObjectSchema, UserTodoLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTodoLinkWhereInputObjectSchema.optional(), cursor: UserTodoLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTodoLinkScalarFieldEnumSchema, UserTodoLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkFindFirstOrThrowArgs>;

export const UserTodoLinkFindFirstOrThrowZodSchema = z.object({ select: UserTodoLinkFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserTodoLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTodoLinkOrderByWithRelationInputObjectSchema, UserTodoLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTodoLinkWhereInputObjectSchema.optional(), cursor: UserTodoLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTodoLinkScalarFieldEnumSchema, UserTodoLinkScalarFieldEnumSchema.array()]).optional() }).strict();