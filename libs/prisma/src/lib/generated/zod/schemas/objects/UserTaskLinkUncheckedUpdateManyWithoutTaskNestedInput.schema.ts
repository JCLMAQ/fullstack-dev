import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkCreateWithoutTaskInputObjectSchema as UserTaskLinkCreateWithoutTaskInputObjectSchema } from './UserTaskLinkCreateWithoutTaskInput.schema';
import { UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema as UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutTaskInput.schema';
import { UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema as UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema } from './UserTaskLinkCreateOrConnectWithoutTaskInput.schema';
import { UserTaskLinkUpsertWithWhereUniqueWithoutTaskInputObjectSchema as UserTaskLinkUpsertWithWhereUniqueWithoutTaskInputObjectSchema } from './UserTaskLinkUpsertWithWhereUniqueWithoutTaskInput.schema';
import { UserTaskLinkCreateManyTaskInputEnvelopeObjectSchema as UserTaskLinkCreateManyTaskInputEnvelopeObjectSchema } from './UserTaskLinkCreateManyTaskInputEnvelope.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkUpdateWithWhereUniqueWithoutTaskInputObjectSchema as UserTaskLinkUpdateWithWhereUniqueWithoutTaskInputObjectSchema } from './UserTaskLinkUpdateWithWhereUniqueWithoutTaskInput.schema';
import { UserTaskLinkUpdateManyWithWhereWithoutTaskInputObjectSchema as UserTaskLinkUpdateManyWithWhereWithoutTaskInputObjectSchema } from './UserTaskLinkUpdateManyWithWhereWithoutTaskInput.schema';
import { UserTaskLinkScalarWhereInputObjectSchema as UserTaskLinkScalarWhereInputObjectSchema } from './UserTaskLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserTaskLinkUpsertWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUpsertWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTaskLinkCreateManyTaskInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserTaskLinkUpdateWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUpdateWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserTaskLinkUpdateManyWithWhereWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUpdateManyWithWhereWithoutTaskInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema), z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInput>;
export const UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInputObjectZodSchema = makeSchema();
