import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProfileFilesInputObjectSchema as UserCreateWithoutProfileFilesInputObjectSchema } from './UserCreateWithoutProfileFilesInput.schema';
import { UserUncheckedCreateWithoutProfileFilesInputObjectSchema as UserUncheckedCreateWithoutProfileFilesInputObjectSchema } from './UserUncheckedCreateWithoutProfileFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutProfileFilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileFilesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutProfileFilesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfileFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutProfileFilesInput>;
export const UserCreateOrConnectWithoutProfileFilesInputObjectZodSchema = makeSchema();
