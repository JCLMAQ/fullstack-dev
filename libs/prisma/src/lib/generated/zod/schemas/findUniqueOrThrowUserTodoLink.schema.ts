import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './objects/UserTodoLinkSelect.schema';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './objects/UserTodoLinkInclude.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './objects/UserTodoLinkWhereUniqueInput.schema';

export const UserTodoLinkFindUniqueOrThrowSchema: z.ZodType<Prisma.UserTodoLinkFindUniqueOrThrowArgs> = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), where: UserTodoLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkFindUniqueOrThrowArgs>;

export const UserTodoLinkFindUniqueOrThrowZodSchema = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), where: UserTodoLinkWhereUniqueInputObjectSchema }).strict();