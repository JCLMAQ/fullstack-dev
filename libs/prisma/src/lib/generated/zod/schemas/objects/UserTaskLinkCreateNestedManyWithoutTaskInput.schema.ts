import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkCreateWithoutTaskInputObjectSchema as UserTaskLinkCreateWithoutTaskInputObjectSchema } from './UserTaskLinkCreateWithoutTaskInput.schema';
import { UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema as UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedCreateWithoutTaskInput.schema';
import { UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema as UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema } from './UserTaskLinkCreateOrConnectWithoutTaskInput.schema';
import { UserTaskLinkCreateManyTaskInputEnvelopeObjectSchema as UserTaskLinkCreateManyTaskInputEnvelopeObjectSchema } from './UserTaskLinkCreateManyTaskInputEnvelope.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './UserTaskLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTaskLinkCreateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => UserTaskLinkCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTaskLinkCreateManyTaskInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTaskLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserTaskLinkCreateNestedManyWithoutTaskInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateNestedManyWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateNestedManyWithoutTaskInput>;
export const UserTaskLinkCreateNestedManyWithoutTaskInputObjectZodSchema = makeSchema();
