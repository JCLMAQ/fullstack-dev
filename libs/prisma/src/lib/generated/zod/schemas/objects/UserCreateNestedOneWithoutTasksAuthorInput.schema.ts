import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutTasksAuthorInputObjectSchema as UserCreateWithoutTasksAuthorInputObjectSchema } from './UserCreateWithoutTasksAuthorInput.schema';
import { UserUncheckedCreateWithoutTasksAuthorInputObjectSchema as UserUncheckedCreateWithoutTasksAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTasksAuthorInput.schema';
import { UserCreateOrConnectWithoutTasksAuthorInputObjectSchema as UserCreateOrConnectWithoutTasksAuthorInputObjectSchema } from './UserCreateOrConnectWithoutTasksAuthorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksAuthorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTasksAuthorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTasksAuthorInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTasksAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTasksAuthorInput>;
export const UserCreateNestedOneWithoutTasksAuthorInputObjectZodSchema = makeSchema();
