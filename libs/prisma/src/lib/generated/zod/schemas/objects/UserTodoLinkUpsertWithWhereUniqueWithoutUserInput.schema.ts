import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkUpdateWithoutUserInputObjectSchema as UserTodoLinkUpdateWithoutUserInputObjectSchema } from './UserTodoLinkUpdateWithoutUserInput.schema';
import { UserTodoLinkUncheckedUpdateWithoutUserInputObjectSchema as UserTodoLinkUncheckedUpdateWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedUpdateWithoutUserInput.schema';
import { UserTodoLinkCreateWithoutUserInputObjectSchema as UserTodoLinkCreateWithoutUserInputObjectSchema } from './UserTodoLinkCreateWithoutUserInput.schema';
import { UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema as UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserTodoLinkUpdateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserTodoLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUpsertWithWhereUniqueWithoutUserInput>;
export const UserTodoLinkUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
