import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkUpdateWithoutTodoInputObjectSchema as UserTodoLinkUpdateWithoutTodoInputObjectSchema } from './UserTodoLinkUpdateWithoutTodoInput.schema';
import { UserTodoLinkUncheckedUpdateWithoutTodoInputObjectSchema as UserTodoLinkUncheckedUpdateWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedUpdateWithoutTodoInput.schema';
import { UserTodoLinkCreateWithoutTodoInputObjectSchema as UserTodoLinkCreateWithoutTodoInputObjectSchema } from './UserTodoLinkCreateWithoutTodoInput.schema';
import { UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema as UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserTodoLinkUpdateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedUpdateWithoutTodoInputObjectSchema)]),
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema)])
}).strict();
export const UserTodoLinkUpsertWithWhereUniqueWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpsertWithWhereUniqueWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpsertWithWhereUniqueWithoutTodoInput>;
export const UserTodoLinkUpsertWithWhereUniqueWithoutTodoInputObjectZodSchema = makeSchema();
