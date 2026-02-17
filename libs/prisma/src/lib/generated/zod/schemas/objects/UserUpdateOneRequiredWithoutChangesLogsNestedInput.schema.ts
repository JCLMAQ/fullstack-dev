import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutChangesLogsInputObjectSchema as UserCreateWithoutChangesLogsInputObjectSchema } from './UserCreateWithoutChangesLogsInput.schema';
import { UserUncheckedCreateWithoutChangesLogsInputObjectSchema as UserUncheckedCreateWithoutChangesLogsInputObjectSchema } from './UserUncheckedCreateWithoutChangesLogsInput.schema';
import { UserCreateOrConnectWithoutChangesLogsInputObjectSchema as UserCreateOrConnectWithoutChangesLogsInputObjectSchema } from './UserCreateOrConnectWithoutChangesLogsInput.schema';
import { UserUpsertWithoutChangesLogsInputObjectSchema as UserUpsertWithoutChangesLogsInputObjectSchema } from './UserUpsertWithoutChangesLogsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutChangesLogsInputObjectSchema as UserUpdateToOneWithWhereWithoutChangesLogsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutChangesLogsInput.schema';
import { UserUpdateWithoutChangesLogsInputObjectSchema as UserUpdateWithoutChangesLogsInputObjectSchema } from './UserUpdateWithoutChangesLogsInput.schema';
import { UserUncheckedUpdateWithoutChangesLogsInputObjectSchema as UserUncheckedUpdateWithoutChangesLogsInputObjectSchema } from './UserUncheckedUpdateWithoutChangesLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutChangesLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutChangesLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutChangesLogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUpdateWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutChangesLogsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutChangesLogsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutChangesLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutChangesLogsNestedInput>;
export const UserUpdateOneRequiredWithoutChangesLogsNestedInputObjectZodSchema = makeSchema();
