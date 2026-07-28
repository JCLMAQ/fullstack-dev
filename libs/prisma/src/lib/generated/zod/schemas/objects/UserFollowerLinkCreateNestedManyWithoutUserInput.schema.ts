import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserFollowerLinkCreateWithoutUserInputObjectSchema as UserFollowerLinkCreateWithoutUserInputObjectSchema } from './UserFollowerLinkCreateWithoutUserInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutUserInput.schema';
import { UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema as UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserFollowerLinkCreateOrConnectWithoutUserInput.schema';
import { UserFollowerLinkCreateManyUserInputEnvelopeObjectSchema as UserFollowerLinkCreateManyUserInputEnvelopeObjectSchema } from './UserFollowerLinkCreateManyUserInputEnvelope.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserFollowerLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserFollowerLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserFollowerLinkCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateNestedManyWithoutUserInput>;
export const UserFollowerLinkCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
