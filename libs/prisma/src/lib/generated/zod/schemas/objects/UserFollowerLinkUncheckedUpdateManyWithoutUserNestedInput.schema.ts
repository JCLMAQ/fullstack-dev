import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserFollowerLinkCreateWithoutUserInputObjectSchema as UserFollowerLinkCreateWithoutUserInputObjectSchema } from './UserFollowerLinkCreateWithoutUserInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutUserInput.schema';
import { UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema as UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserFollowerLinkCreateOrConnectWithoutUserInput.schema';
import { UserFollowerLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema as UserFollowerLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserFollowerLinkUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserFollowerLinkCreateManyUserInputEnvelopeObjectSchema as UserFollowerLinkCreateManyUserInputEnvelopeObjectSchema } from './UserFollowerLinkCreateManyUserInputEnvelope.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema as UserFollowerLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserFollowerLinkUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserFollowerLinkUpdateManyWithWhereWithoutUserInputObjectSchema as UserFollowerLinkUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserFollowerLinkUpdateManyWithWhereWithoutUserInput.schema';
import { UserFollowerLinkScalarWhereInputObjectSchema as UserFollowerLinkScalarWhereInputObjectSchema } from './UserFollowerLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserFollowerLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserFollowerLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserFollowerLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserFollowerLinkUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema), z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInput>;
export const UserFollowerLinkUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
