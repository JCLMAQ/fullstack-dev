import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutChangesLogsInputObjectSchema as UserCreateWithoutChangesLogsInputObjectSchema } from './UserCreateWithoutChangesLogsInput.schema';
import { UserUncheckedCreateWithoutChangesLogsInputObjectSchema as UserUncheckedCreateWithoutChangesLogsInputObjectSchema } from './UserUncheckedCreateWithoutChangesLogsInput.schema';
import { UserCreateOrConnectWithoutChangesLogsInputObjectSchema as UserCreateOrConnectWithoutChangesLogsInputObjectSchema } from './UserCreateOrConnectWithoutChangesLogsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutChangesLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutChangesLogsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutChangesLogsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutChangesLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutChangesLogsInput>;
export const UserCreateNestedOneWithoutChangesLogsInputObjectZodSchema = makeSchema();
