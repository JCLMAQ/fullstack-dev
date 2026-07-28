import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTodoLinkUpdateManyMutationInputObjectSchema as UserTodoLinkUpdateManyMutationInputObjectSchema } from './objects/UserTodoLinkUpdateManyMutationInput.schema';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './objects/UserTodoLinkWhereInput.schema';

export const UserTodoLinkUpdateManySchema: z.ZodType<Prisma.UserTodoLinkUpdateManyArgs> = z.object({ data: UserTodoLinkUpdateManyMutationInputObjectSchema, where: UserTodoLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateManyArgs>;

export const UserTodoLinkUpdateManyZodSchema = z.object({ data: UserTodoLinkUpdateManyMutationInputObjectSchema, where: UserTodoLinkWhereInputObjectSchema.optional() }).strict();