import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkCreateWithoutTodoInputObjectSchema as UserTodoLinkCreateWithoutTodoInputObjectSchema } from './UserTodoLinkCreateWithoutTodoInput.schema';
import { UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema as UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutTodoInput.schema';
import { UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema as UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema } from './UserTodoLinkCreateOrConnectWithoutTodoInput.schema';
import { UserTodoLinkUpsertWithWhereUniqueWithoutTodoInputObjectSchema as UserTodoLinkUpsertWithWhereUniqueWithoutTodoInputObjectSchema } from './UserTodoLinkUpsertWithWhereUniqueWithoutTodoInput.schema';
import { UserTodoLinkCreateManyTodoInputEnvelopeObjectSchema as UserTodoLinkCreateManyTodoInputEnvelopeObjectSchema } from './UserTodoLinkCreateManyTodoInputEnvelope.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkUpdateWithWhereUniqueWithoutTodoInputObjectSchema as UserTodoLinkUpdateWithWhereUniqueWithoutTodoInputObjectSchema } from './UserTodoLinkUpdateWithWhereUniqueWithoutTodoInput.schema';
import { UserTodoLinkUpdateManyWithWhereWithoutTodoInputObjectSchema as UserTodoLinkUpdateManyWithWhereWithoutTodoInputObjectSchema } from './UserTodoLinkUpdateManyWithWhereWithoutTodoInput.schema';
import { UserTodoLinkScalarWhereInputObjectSchema as UserTodoLinkScalarWhereInputObjectSchema } from './UserTodoLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkCreateWithoutTodoInputObjectSchema).array(), z.lazy(() => UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserTodoLinkUpsertWithWhereUniqueWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUpsertWithWhereUniqueWithoutTodoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTodoLinkCreateManyTodoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserTodoLinkUpdateWithWhereUniqueWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUpdateWithWhereUniqueWithoutTodoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserTodoLinkUpdateManyWithWhereWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUpdateManyWithWhereWithoutTodoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema), z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInputObjectSchema: z.ZodType<Prisma.UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInput>;
export const UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInputObjectZodSchema = makeSchema();
