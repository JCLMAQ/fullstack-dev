import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkScalarWhereInputObjectSchema as UserTodoLinkScalarWhereInputObjectSchema } from './UserTodoLinkScalarWhereInput.schema';
import { UserTodoLinkUpdateManyMutationInputObjectSchema as UserTodoLinkUpdateManyMutationInputObjectSchema } from './UserTodoLinkUpdateManyMutationInput.schema';
import { UserTodoLinkUncheckedUpdateManyWithoutTodoInputObjectSchema as UserTodoLinkUncheckedUpdateManyWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedUpdateManyWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserTodoLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedUpdateManyWithoutTodoInputObjectSchema)])
}).strict();
export const UserTodoLinkUpdateManyWithWhereWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpdateManyWithWhereWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateManyWithWhereWithoutTodoInput>;
export const UserTodoLinkUpdateManyWithWhereWithoutTodoInputObjectZodSchema = makeSchema();
