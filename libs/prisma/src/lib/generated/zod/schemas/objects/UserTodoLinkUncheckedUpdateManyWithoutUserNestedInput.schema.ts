import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTodoLinkCreateWithoutUserInputObjectSchema as UserTodoLinkCreateWithoutUserInputObjectSchema } from './UserTodoLinkCreateWithoutUserInput.schema';
import { UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema as UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutUserInput.schema';
import { UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema as UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserTodoLinkCreateOrConnectWithoutUserInput.schema';
import { UserTodoLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema as UserTodoLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserTodoLinkUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserTodoLinkCreateManyUserInputEnvelopeObjectSchema as UserTodoLinkCreateManyUserInputEnvelopeObjectSchema } from './UserTodoLinkCreateManyUserInputEnvelope.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema as UserTodoLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserTodoLinkUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserTodoLinkUpdateManyWithWhereWithoutUserInputObjectSchema as UserTodoLinkUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserTodoLinkUpdateManyWithWhereWithoutUserInput.schema';
import { UserTodoLinkScalarWhereInputObjectSchema as UserTodoLinkScalarWhereInputObjectSchema } from './UserTodoLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserTodoLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTodoLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserTodoLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserTodoLinkUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserTodoLinkUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema), z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserTodoLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUncheckedUpdateManyWithoutUserNestedInput>;
export const UserTodoLinkUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
