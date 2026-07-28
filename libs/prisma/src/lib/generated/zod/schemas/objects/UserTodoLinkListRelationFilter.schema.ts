import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './UserTodoLinkWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => UserTodoLinkWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserTodoLinkWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserTodoLinkWhereInputObjectSchema).optional()
}).strict();
export const UserTodoLinkListRelationFilterObjectSchema: z.ZodType<Prisma.UserTodoLinkListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkListRelationFilter>;
export const UserTodoLinkListRelationFilterObjectZodSchema = makeSchema();
