import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutTasksInputObjectSchema as UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema as UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema';
import { UserCreateOrConnectWithoutTasksInputObjectSchema as UserCreateOrConnectWithoutTasksInputObjectSchema } from './UserCreateOrConnectWithoutTasksInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTasksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTasksInput>;
export const UserCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
