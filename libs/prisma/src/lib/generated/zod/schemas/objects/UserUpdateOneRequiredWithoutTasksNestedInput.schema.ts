import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutTasksInputObjectSchema as UserCreateWithoutTasksInputObjectSchema } from './UserCreateWithoutTasksInput.schema';
import { UserUncheckedCreateWithoutTasksInputObjectSchema as UserUncheckedCreateWithoutTasksInputObjectSchema } from './UserUncheckedCreateWithoutTasksInput.schema';
import { UserCreateOrConnectWithoutTasksInputObjectSchema as UserCreateOrConnectWithoutTasksInputObjectSchema } from './UserCreateOrConnectWithoutTasksInput.schema';
import { UserUpsertWithoutTasksInputObjectSchema as UserUpsertWithoutTasksInputObjectSchema } from './UserUpsertWithoutTasksInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTasksInputObjectSchema as UserUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTasksInput.schema';
import { UserUpdateWithoutTasksInputObjectSchema as UserUpdateWithoutTasksInputObjectSchema } from './UserUpdateWithoutTasksInput.schema';
import { UserUncheckedUpdateWithoutTasksInputObjectSchema as UserUncheckedUpdateWithoutTasksInputObjectSchema } from './UserUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTasksInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => UserUpdateWithoutTasksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTasksNestedInput>;
export const UserUpdateOneRequiredWithoutTasksNestedInputObjectZodSchema = makeSchema();
