import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutGroupsInputObjectSchema as UserCreateWithoutGroupsInputObjectSchema } from './UserCreateWithoutGroupsInput.schema';
import { UserUncheckedCreateWithoutGroupsInputObjectSchema as UserUncheckedCreateWithoutGroupsInputObjectSchema } from './UserUncheckedCreateWithoutGroupsInput.schema';
import { UserCreateOrConnectWithoutGroupsInputObjectSchema as UserCreateOrConnectWithoutGroupsInputObjectSchema } from './UserCreateOrConnectWithoutGroupsInput.schema';
import { UserUpsertWithoutGroupsInputObjectSchema as UserUpsertWithoutGroupsInputObjectSchema } from './UserUpsertWithoutGroupsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutGroupsInputObjectSchema as UserUpdateToOneWithWhereWithoutGroupsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutGroupsInput.schema';
import { UserUpdateWithoutGroupsInputObjectSchema as UserUpdateWithoutGroupsInputObjectSchema } from './UserUpdateWithoutGroupsInput.schema';
import { UserUncheckedUpdateWithoutGroupsInputObjectSchema as UserUncheckedUpdateWithoutGroupsInputObjectSchema } from './UserUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutGroupsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => UserUpdateWithoutGroupsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGroupsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutGroupsNestedInput>;
export const UserUpdateOneRequiredWithoutGroupsNestedInputObjectZodSchema = makeSchema();
