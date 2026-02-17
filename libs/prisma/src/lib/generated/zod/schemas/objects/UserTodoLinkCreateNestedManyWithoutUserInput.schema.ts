import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTodoLinkCreateWithoutUserInputObjectSchema as UserTodoLinkCreateWithoutUserInputObjectSchema } from './UserTodoLinkCreateWithoutUserInput.schema';
import { UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema as UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutUserInput.schema';
import { UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema as UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserTodoLinkCreateOrConnectWithoutUserInput.schema';
import { UserTodoLinkCreateManyUserInputEnvelopeObjectSchema as UserTodoLinkCreateManyUserInputEnvelopeObjectSchema } from './UserTodoLinkCreateManyUserInputEnvelope.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTodoLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserTodoLinkCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateNestedManyWithoutUserInput>;
export const UserTodoLinkCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
