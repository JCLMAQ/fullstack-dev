import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutTasksAuthorInputObjectSchema as UserCreateWithoutTasksAuthorInputObjectSchema } from './UserCreateWithoutTasksAuthorInput.schema';
import { UserUncheckedCreateWithoutTasksAuthorInputObjectSchema as UserUncheckedCreateWithoutTasksAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTasksAuthorInput.schema';
import { UserCreateOrConnectWithoutTasksAuthorInputObjectSchema as UserCreateOrConnectWithoutTasksAuthorInputObjectSchema } from './UserCreateOrConnectWithoutTasksAuthorInput.schema';
import { UserUpsertWithoutTasksAuthorInputObjectSchema as UserUpsertWithoutTasksAuthorInputObjectSchema } from './UserUpsertWithoutTasksAuthorInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTasksAuthorInputObjectSchema as UserUpdateToOneWithWhereWithoutTasksAuthorInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTasksAuthorInput.schema';
import { UserUpdateWithoutTasksAuthorInputObjectSchema as UserUpdateWithoutTasksAuthorInputObjectSchema } from './UserUpdateWithoutTasksAuthorInput.schema';
import { UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema as UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema } from './UserUncheckedUpdateWithoutTasksAuthorInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksAuthorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTasksAuthorInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTasksAuthorInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUpdateWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTasksAuthorInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTasksAuthorNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTasksAuthorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTasksAuthorNestedInput>;
export const UserUpdateOneRequiredWithoutTasksAuthorNestedInputObjectZodSchema = makeSchema();
