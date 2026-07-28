import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutProfileFilesInputObjectSchema as UserCreateWithoutProfileFilesInputObjectSchema } from './UserCreateWithoutProfileFilesInput.schema';
import { UserUncheckedCreateWithoutProfileFilesInputObjectSchema as UserUncheckedCreateWithoutProfileFilesInputObjectSchema } from './UserUncheckedCreateWithoutProfileFilesInput.schema';
import { UserCreateOrConnectWithoutProfileFilesInputObjectSchema as UserCreateOrConnectWithoutProfileFilesInputObjectSchema } from './UserCreateOrConnectWithoutProfileFilesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileFilesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutProfileFilesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProfileFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutProfileFilesInput>;
export const UserCreateNestedOneWithoutProfileFilesInputObjectZodSchema = makeSchema();
