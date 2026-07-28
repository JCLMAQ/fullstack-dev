import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutChangesLogsInputObjectSchema as UserUpdateWithoutChangesLogsInputObjectSchema } from './UserUpdateWithoutChangesLogsInput.schema';
import { UserUncheckedUpdateWithoutChangesLogsInputObjectSchema as UserUncheckedUpdateWithoutChangesLogsInputObjectSchema } from './UserUncheckedUpdateWithoutChangesLogsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutChangesLogsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutChangesLogsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutChangesLogsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutChangesLogsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutChangesLogsInput>;
export const UserUpdateToOneWithWhereWithoutChangesLogsInputObjectZodSchema = makeSchema();
