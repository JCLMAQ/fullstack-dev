import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTodoLinkScalarWhereInputObjectSchema as UserTodoLinkScalarWhereInputObjectSchema } from './UserTodoLinkScalarWhereInput.schema';
import { UserTodoLinkUpdateManyMutationInputObjectSchema as UserTodoLinkUpdateManyMutationInputObjectSchema } from './UserTodoLinkUpdateManyMutationInput.schema';
import { UserTodoLinkUncheckedUpdateManyWithoutUserInputObjectSchema as UserTodoLinkUncheckedUpdateManyWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserTodoLinkUpdateManyMutationInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const UserTodoLinkUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateManyWithWhereWithoutUserInput>;
export const UserTodoLinkUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
