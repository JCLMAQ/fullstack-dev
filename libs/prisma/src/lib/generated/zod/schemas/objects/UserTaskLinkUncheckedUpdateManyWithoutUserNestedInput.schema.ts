import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkCreateWithoutUserInputObjectSchema as UserTaskLinkCreateWithoutUserInputObjectSchema } from './UserTaskLinkCreateWithoutUserInput.schema';
import { UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema as UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutUserInput.schema';
import { UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema as UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserTaskLinkCreateOrConnectWithoutUserInput.schema';
import { UserTaskLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema as UserTaskLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserTaskLinkUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserTaskLinkCreateManyUserInputEnvelopeObjectSchema as UserTaskLinkCreateManyUserInputEnvelopeObjectSchema } from './UserTaskLinkCreateManyUserInputEnvelope.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema as UserTaskLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserTaskLinkUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserTaskLinkUpdateManyWithWhereWithoutUserInputObjectSchema as UserTaskLinkUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserTaskLinkUpdateManyWithWhereWithoutUserInput.schema';
import { UserTaskLinkScalarWhereInputObjectSchema as UserTaskLinkScalarWhereInputObjectSchema } from './UserTaskLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserTaskLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTaskLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserTaskLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserTaskLinkUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema), z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserTaskLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUncheckedUpdateManyWithoutUserNestedInput>;
export const UserTaskLinkUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
