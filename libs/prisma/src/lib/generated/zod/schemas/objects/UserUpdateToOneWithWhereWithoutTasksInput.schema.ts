import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTasksInputObjectSchema as UserUpdateWithoutTasksInputObjectSchema } from './UserUpdateWithoutTasksInput.schema';
import { UserUncheckedUpdateWithoutTasksInputObjectSchema as UserUncheckedUpdateWithoutTasksInputObjectSchema } from './UserUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTasksInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTasksInput>;
export const UserUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
