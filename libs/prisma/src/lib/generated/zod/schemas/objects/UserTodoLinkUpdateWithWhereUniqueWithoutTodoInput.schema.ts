import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkUpdateWithoutTodoInputObjectSchema as UserTodoLinkUpdateWithoutTodoInputObjectSchema } from './UserTodoLinkUpdateWithoutTodoInput.schema';
import { UserTodoLinkUncheckedUpdateWithoutTodoInputObjectSchema as UserTodoLinkUncheckedUpdateWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedUpdateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserTodoLinkUpdateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedUpdateWithoutTodoInputObjectSchema)])
}).strict();
export const UserTodoLinkUpdateWithWhereUniqueWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpdateWithWhereUniqueWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpdateWithWhereUniqueWithoutTodoInput>;
export const UserTodoLinkUpdateWithWhereUniqueWithoutTodoInputObjectZodSchema = makeSchema();
