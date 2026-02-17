import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkCreateWithoutFollowerInputObjectSchema as UserFollowerLinkCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkCreateWithoutFollowerInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutFollowerInput.schema';
import { UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema as UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema } from './UserFollowerLinkCreateOrConnectWithoutFollowerInput.schema';
import { UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInputObjectSchema as UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInputObjectSchema } from './UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInput.schema';
import { UserFollowerLinkCreateManyFollowerInputEnvelopeObjectSchema as UserFollowerLinkCreateManyFollowerInputEnvelopeObjectSchema } from './UserFollowerLinkCreateManyFollowerInputEnvelope.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInputObjectSchema as UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInputObjectSchema } from './UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInput.schema';
import { UserFollowerLinkUpdateManyWithWhereWithoutFollowerInputObjectSchema as UserFollowerLinkUpdateManyWithWhereWithoutFollowerInputObjectSchema } from './UserFollowerLinkUpdateManyWithWhereWithoutFollowerInput.schema';
import { UserFollowerLinkScalarWhereInputObjectSchema as UserFollowerLinkScalarWhereInputObjectSchema } from './UserFollowerLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkCreateWithoutFollowerInputObjectSchema).array(), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUpsertWithWhereUniqueWithoutFollowerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserFollowerLinkCreateManyFollowerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUpdateWithWhereUniqueWithoutFollowerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserFollowerLinkUpdateManyWithWhereWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUpdateManyWithWhereWithoutFollowerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema), z.lazy(() => UserFollowerLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInput>;
export const UserFollowerLinkUncheckedUpdateManyWithoutFollowerNestedInputObjectZodSchema = makeSchema();
