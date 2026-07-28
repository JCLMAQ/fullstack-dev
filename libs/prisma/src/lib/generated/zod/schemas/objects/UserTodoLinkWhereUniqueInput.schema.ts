import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkUserIdTodoIdCompoundUniqueInputObjectSchema as UserTodoLinkUserIdTodoIdCompoundUniqueInputObjectSchema } from './UserTodoLinkUserIdTodoIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  userId_todoId: z.lazy(() => UserTodoLinkUserIdTodoIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const UserTodoLinkWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserTodoLinkWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkWhereUniqueInput>;
export const UserTodoLinkWhereUniqueInputObjectZodSchema = makeSchema();
