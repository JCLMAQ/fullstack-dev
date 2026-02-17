import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkCreateWithoutFollowerInputObjectSchema as UserFollowerLinkCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkCreateWithoutFollowerInput.schema';
import { UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema as UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema } from './UserFollowerLinkUncheckedCreateWithoutFollowerInput.schema';
import { UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema as UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema } from './UserFollowerLinkCreateOrConnectWithoutFollowerInput.schema';
import { UserFollowerLinkCreateManyFollowerInputEnvelopeObjectSchema as UserFollowerLinkCreateManyFollowerInputEnvelopeObjectSchema } from './UserFollowerLinkCreateManyFollowerInputEnvelope.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './UserFollowerLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserFollowerLinkCreateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkCreateWithoutFollowerInputObjectSchema).array(), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkUncheckedCreateWithoutFollowerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema), z.lazy(() => UserFollowerLinkCreateOrConnectWithoutFollowerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserFollowerLinkCreateManyFollowerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema), z.lazy(() => UserFollowerLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserFollowerLinkCreateNestedManyWithoutFollowerInputObjectSchema: z.ZodType<Prisma.UserFollowerLinkCreateNestedManyWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateNestedManyWithoutFollowerInput>;
export const UserFollowerLinkCreateNestedManyWithoutFollowerInputObjectZodSchema = makeSchema();
