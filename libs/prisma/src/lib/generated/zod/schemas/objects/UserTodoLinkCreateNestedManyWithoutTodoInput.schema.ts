import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserTodoLinkCreateWithoutTodoInputObjectSchema as UserTodoLinkCreateWithoutTodoInputObjectSchema } from './UserTodoLinkCreateWithoutTodoInput.schema';
import { UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema as UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedCreateWithoutTodoInput.schema';
import { UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema as UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema } from './UserTodoLinkCreateOrConnectWithoutTodoInput.schema';
import { UserTodoLinkCreateManyTodoInputEnvelopeObjectSchema as UserTodoLinkCreateManyTodoInputEnvelopeObjectSchema } from './UserTodoLinkCreateManyTodoInputEnvelope.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './UserTodoLinkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserTodoLinkCreateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkCreateWithoutTodoInputObjectSchema).array(), z.lazy(() => UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkUncheckedCreateWithoutTodoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema), z.lazy(() => UserTodoLinkCreateOrConnectWithoutTodoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => UserTodoLinkCreateManyTodoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema), z.lazy(() => UserTodoLinkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserTodoLinkCreateNestedManyWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateNestedManyWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateNestedManyWithoutTodoInput>;
export const UserTodoLinkCreateNestedManyWithoutTodoInputObjectZodSchema = makeSchema();
