import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutChangesLogsInputObjectSchema as UserCreateWithoutChangesLogsInputObjectSchema } from './UserCreateWithoutChangesLogsInput.schema';
import { UserUncheckedCreateWithoutChangesLogsInputObjectSchema as UserUncheckedCreateWithoutChangesLogsInputObjectSchema } from './UserUncheckedCreateWithoutChangesLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutChangesLogsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutChangesLogsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutChangesLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutChangesLogsInput>;
export const UserCreateOrConnectWithoutChangesLogsInputObjectZodSchema = makeSchema();
