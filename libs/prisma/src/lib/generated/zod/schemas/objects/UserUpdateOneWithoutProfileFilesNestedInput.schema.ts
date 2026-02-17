import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutProfileFilesInputObjectSchema as UserCreateWithoutProfileFilesInputObjectSchema } from './UserCreateWithoutProfileFilesInput.schema';
import { UserUncheckedCreateWithoutProfileFilesInputObjectSchema as UserUncheckedCreateWithoutProfileFilesInputObjectSchema } from './UserUncheckedCreateWithoutProfileFilesInput.schema';
import { UserCreateOrConnectWithoutProfileFilesInputObjectSchema as UserCreateOrConnectWithoutProfileFilesInputObjectSchema } from './UserCreateOrConnectWithoutProfileFilesInput.schema';
import { UserUpsertWithoutProfileFilesInputObjectSchema as UserUpsertWithoutProfileFilesInputObjectSchema } from './UserUpsertWithoutProfileFilesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutProfileFilesInputObjectSchema as UserUpdateToOneWithWhereWithoutProfileFilesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutProfileFilesInput.schema';
import { UserUpdateWithoutProfileFilesInputObjectSchema as UserUpdateWithoutProfileFilesInputObjectSchema } from './UserUpdateWithoutProfileFilesInput.schema';
import { UserUncheckedUpdateWithoutProfileFilesInputObjectSchema as UserUncheckedUpdateWithoutProfileFilesInputObjectSchema } from './UserUncheckedUpdateWithoutProfileFilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileFilesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileFilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUpdateWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileFilesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutProfileFilesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutProfileFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutProfileFilesNestedInput>;
export const UserUpdateOneWithoutProfileFilesNestedInputObjectZodSchema = makeSchema();
