import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserPostLikeLinkCreateWithoutUserInputObjectSchema as UserPostLikeLinkCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkCreateWithoutUserInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutUserInput.schema';
import { UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema as UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserPostLikeLinkCreateOrConnectWithoutUserInput.schema';
import { UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema as UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserPostLikeLinkCreateManyUserInputEnvelopeObjectSchema as UserPostLikeLinkCreateManyUserInputEnvelopeObjectSchema } from './UserPostLikeLinkCreateManyUserInputEnvelope.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema as UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserPostLikeLinkUpdateManyWithWhereWithoutUserInputObjectSchema as UserPostLikeLinkUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserPostLikeLinkUpdateManyWithWhereWithoutUserInput.schema';
import { UserPostLikeLinkScalarWhereInputObjectSchema as UserPostLikeLinkScalarWhereInputObjectSchema } from './UserPostLikeLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPostLikeLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPostLikeLinkUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema), z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInput>;
export const UserPostLikeLinkUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
