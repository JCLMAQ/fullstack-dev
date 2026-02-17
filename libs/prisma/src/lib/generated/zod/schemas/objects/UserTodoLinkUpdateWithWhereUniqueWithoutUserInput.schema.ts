import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkUpdateWithoutUserInputObjectSchema as UserTodoLinkUpdateWithoutUserInputObjectSchema } from './UserTodoLinkUpdateWithoutUserInput.schema';
import { UserTodoLinkUncheckedUpdateWithoutUserInputObjectSchema as UserTodoLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserTodoLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserTodoLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateWithWhereUniqueWithoutUserInput>;
export const UserTodoLinkUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
