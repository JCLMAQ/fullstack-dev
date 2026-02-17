import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  todoId: z.string()
}).strict();
export const UserTodoLinkUserIdTodoIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUserIdTodoIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUserIdTodoIdCompoundUniqueInput>;
export const UserTodoLinkUserIdTodoIdCompoundUniqueInputObjectZodSchema = makeSchema();
