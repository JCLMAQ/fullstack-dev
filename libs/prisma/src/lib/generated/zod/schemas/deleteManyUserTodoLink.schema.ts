import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './objects/UserTodoLinkWhereInput.schema';

export const UserTodoLinkDeleteManySchema: z.ZodType<Prisma.UserTodoLinkDeleteManyArgs> = z.object({ where: UserTodoLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkDeleteManyArgs>;

export const UserTodoLinkDeleteManyZodSchema = z.object({ where: UserTodoLinkWhereInputObjectSchema.optional() }).strict();