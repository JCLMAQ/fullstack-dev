import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserPostLikeLinkCreateWithoutPostInputObjectSchema as UserPostLikeLinkCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedCreateWithoutPostInput.schema';
import { UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema as UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateOrConnectWithoutPostInput.schema';
import { UserPostLikeLinkCreateManyPostInputEnvelopeObjectSchema as UserPostLikeLinkCreateManyPostInputEnvelopeObjectSchema } from './UserPostLikeLinkCreateManyPostInputEnvelope.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './UserPostLikeLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserPostLikeLinkCreateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateWithoutPostInputObjectSchema).array(), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkUncheckedCreateWithoutPostInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema), z.lazy(() => UserPostLikeLinkCreateOrConnectWithoutPostInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserPostLikeLinkCreateManyPostInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema), z.lazy(() => UserPostLikeLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserPostLikeLinkCreateNestedManyWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateNestedManyWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateNestedManyWithoutPostInput>;
export const UserPostLikeLinkCreateNestedManyWithoutPostInputObjectZodSchema = makeSchema();
