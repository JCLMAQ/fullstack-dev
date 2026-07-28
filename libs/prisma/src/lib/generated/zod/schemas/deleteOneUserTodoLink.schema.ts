import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './objects/UserTodoLinkSelect.schema';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './objects/UserTodoLinkInclude.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './objects/UserTodoLinkWhereUniqueInput.schema';

export const UserTodoLinkDeleteOneSchema: z.ZodType<Prisma.UserTodoLinkDeleteArgs> = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), where: UserTodoLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkDeleteArgs>;

export const UserTodoLinkDeleteOneZodSchema = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), where: UserTodoLinkWhereUniqueInputObjectSchema }).strict();