import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTaskLinkCreateWithoutUserInputObjectSchema as UserTaskLinkCreateWithoutUserInputObjectSchema } from './UserTaskLinkCreateWithoutUserInput.schema';
import { UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema as UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutUserInput.schema';
import { UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema as UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema } from './UserTaskLinkCreateOrConnectWithoutUserInput.schema';
import { UserTaskLinkCreateManyUserInputEnvelopeObjectSchema as UserTaskLinkCreateManyUserInputEnvelopeObjectSchema } from './UserTaskLinkCreateManyUserInputEnvelope.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkCreateWithoutUserInputObjectSchema).array(), z.lazy(() => UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => UserTaskLinkCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTaskLinkCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserTaskLinkUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTaskLinkUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkUncheckedCreateNestedManyWithoutUserInput>;
export const UserTaskLinkUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
