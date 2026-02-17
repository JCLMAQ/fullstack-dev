import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './objects/UserTodoLinkSelect.schema';
import { UserTodoLinkUpdateManyMutationInputObjectSchema as UserTodoLinkUpdateManyMutationInputObjectSchema } from './objects/UserTodoLinkUpdateManyMutationInput.schema';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './objects/UserTodoLinkWhereInput.schema';

export const UserTodoLinkUpdateManyAndReturnSchema: z.ZodType<Prisma.UserTodoLinkUpdateManyAndReturnArgs> = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), data: UserTodoLinkUpdateManyMutationInputObjectSchema, where: UserTodoLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateManyAndReturnArgs>;

export const UserTodoLinkUpdateManyAndReturnZodSchema = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), data: UserTodoLinkUpdateManyMutationInputObjectSchema, where: UserTodoLinkWhereInputObjectSchema.optional() }).strict();