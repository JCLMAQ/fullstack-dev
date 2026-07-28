import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutOwnedFilesInputObjectSchema as UserCreateWithoutOwnedFilesInputObjectSchema } from './UserCreateWithoutOwnedFilesInput.schema';
import { UserUncheckedCreateWithoutOwnedFilesInputObjectSchema as UserUncheckedCreateWithoutOwnedFilesInputObjectSchema } from './UserUncheckedCreateWithoutOwnedFilesInput.schema';
import { UserCreateOrConnectWithoutOwnedFilesInputObjectSchema as UserCreateOrConnectWithoutOwnedFilesInputObjectSchema } from './UserCreateOrConnectWithoutOwnedFilesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedFilesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutOwnedFilesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedFilesInput>;
export const UserCreateNestedOneWithoutOwnedFilesInputObjectZodSchema = makeSchema();
