import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutChangesLogsInputObjectSchema as UserUpdateWithoutChangesLogsInputObjectSchema } from './UserUpdateWithoutChangesLogsInput.schema';
import { UserUncheckedUpdateWithoutChangesLogsInputObjectSchema as UserUncheckedUpdateWithoutChangesLogsInputObjectSchema } from './UserUncheckedUpdateWithoutChangesLogsInput.schema';
import { UserCreateWithoutChangesLogsInputObjectSchema as UserCreateWithoutChangesLogsInputObjectSchema } from './UserCreateWithoutChangesLogsInput.schema';
import { UserUncheckedCreateWithoutChangesLogsInputObjectSchema as UserUncheckedCreateWithoutChangesLogsInputObjectSchema } from './UserUncheckedCreateWithoutChangesLogsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutChangesLogsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutChangesLogsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutChangesLogsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutChangesLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutChangesLogsInput>;
export const UserUpsertWithoutChangesLogsInputObjectZodSchema = makeSchema();
