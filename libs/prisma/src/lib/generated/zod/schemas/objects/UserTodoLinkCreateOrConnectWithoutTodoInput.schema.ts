import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkCreateWithoutTodoInputObjectSchema as UserTodoLinkCreateWithoutTodoInputObjectSchema } from './UserTodoLinkCreateWithoutTodoInput.schema';
import { UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema as UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutTodoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema)])
}).strict();
export const UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateOrConnectWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateOrConnectWithoutTodoInput>;
export const UserTodoLinkCreateOrConnectWithoutTodoInputObjectZodSchema = makeSchema();
