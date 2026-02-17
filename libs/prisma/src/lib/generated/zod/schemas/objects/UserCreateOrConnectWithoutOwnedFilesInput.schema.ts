import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOwnedFilesInputObjectSchema as UserCreateWithoutOwnedFilesInputObjectSchema } from './UserCreateWithoutOwnedFilesInput.schema';
import { UserUncheckedCreateWithoutOwnedFilesInputObjectSchema as UserUncheckedCreateWithoutOwnedFilesInputObjectSchema } from './UserUncheckedCreateWithoutOwnedFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOwnedFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOwnedFilesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOwnedFilesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedFilesInput>;
export const UserCreateOrConnectWithoutOwnedFilesInputObjectZodSchema = makeSchema();
