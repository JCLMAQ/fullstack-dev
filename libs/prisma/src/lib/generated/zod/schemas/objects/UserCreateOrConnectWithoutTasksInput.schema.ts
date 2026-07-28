import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTasksInputObjectSchema as UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema as UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTasksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTasksInput>;
export const UserCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
