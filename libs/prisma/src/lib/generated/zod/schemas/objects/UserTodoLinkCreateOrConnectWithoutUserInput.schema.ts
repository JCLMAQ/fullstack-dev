import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkCreateWithoutUserInputObjectSchema as UserTodoLinkCreateWithoutUserInputObjectSchema } from './UserTodoLinkCreateWithoutUserInput.schema';
import { UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema as UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateOrConnectWithoutUserInput>;
export const UserTodoLinkCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
