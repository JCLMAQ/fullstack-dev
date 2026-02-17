import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkCreateWithoutPostInputObjectSchema as UserPostLikeLinkCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutPostInput.schema';
import { UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema as UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateOrConnectWithoutPostInput.schema';
import { UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInputObjectSchema as UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInputObjectSchema } from './UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInput.schema';
import { UserPostLikeLinkCreateManyPostInputEnvelopeObjectSchema as UserPostLikeLinkCreateManyPostInputEnvelopeObjectSchema } from './UserPostLikeLinkCreateManyPostInputEnvelope.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInputObjectSchema as UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInputObjectSchema } from './UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInput.schema';
import { UserPostLikeLinkUpdateManyWithWhereWithoutPostInputObjectSchema as UserPostLikeLinkUpdateManyWithWhereWithoutPostInputObjectSchema } from './UserPostLikeLinkUpdateManyWithWhereWithoutPostInput.schema';
import { UserPostLikeLinkScalarWhereInputObjectSchema as UserPostLikeLinkScalarWhereInputObjectSchema } from './UserPostLikeLinkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateWithoutPostInputObjectSchema).array(), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUpsertWithWhereUniqueWithoutPostInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPostLikeLinkCreateManyPostInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUpdateWithWhereUniqueWithoutPostInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserPostLikeLinkUpdateManyWithWhereWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUpdateManyWithWhereWithoutPostInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema), z.lazy(() => UserPostLikeLinkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserPostLikeLinkUncheckedUpdateManyWithoutPostNestedInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkUncheckedUpdateManyWithoutPostNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkUncheckedUpdateManyWithoutPostNestedInput>;
export const UserPostLikeLinkUncheckedUpdateManyWithoutPostNestedInputObjectZodSchema = makeSchema();
