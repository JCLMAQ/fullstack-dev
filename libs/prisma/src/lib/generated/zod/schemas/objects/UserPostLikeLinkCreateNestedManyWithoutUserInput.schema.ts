import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkCreateWithoutUserInputObjectSchema as UserPostLikeLinkCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkCreateWithoutUserInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutUserInput.schema';
import { UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema as UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserPostLikeLinkCreateOrConnectWithoutUserInput.schema';
import { UserPostLikeLinkCreateManyUserInputEnvelopeObjectSchema as UserPostLikeLinkCreateManyUserInputEnvelopeObjectSchema } from './UserPostLikeLinkCreateManyUserInputEnvelope.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPostLikeLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserPostLikeLinkCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateNestedManyWithoutUserInput>;
export const UserPostLikeLinkCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
