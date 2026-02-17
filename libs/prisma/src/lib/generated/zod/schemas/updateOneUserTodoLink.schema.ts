import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './objects/UserTodoLinkSelect.schema';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './objects/UserTodoLinkInclude.schema';
import { UserTodoLinkUpdateInputObjectSchema as UserTodoLinkUpdateInputObjectSchema } from './objects/UserTodoLinkUpdateInput.schema';
import { UserTodoLinkUncheckedUpdateInputObjectSchema as UserTodoLinkUncheckedUpdateInputObjectSchema } from './objects/UserTodoLinkUncheckedUpdateInput.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './objects/UserTodoLinkWhereUniqueInput.schema';

export const UserTodoLinkUpdateOneSchema: z.ZodType<Prisma.UserTodoLinkUpdateArgs> = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), data: z.union([UserTodoLinkUpdateInputObjectSchema, UserTodoLinkUncheckedUpdateInputObjectSchema]), where: UserTodoLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateArgs>;

export const UserTodoLinkUpdateOneZodSchema = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), data: z.union([UserTodoLinkUpdateInputObjectSchema, UserTodoLinkUncheckedUpdateInputObjectSchema]), where: UserTodoLinkWhereUniqueInputObjectSchema }).strict();