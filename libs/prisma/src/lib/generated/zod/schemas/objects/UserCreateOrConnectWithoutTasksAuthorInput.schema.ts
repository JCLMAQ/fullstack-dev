import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTasksAuthorInputObjectSchema as UserCreateWithoutTasksAuthorInputObjectSchema } from './UserCreateWithoutTasksAuthorInput.schema';
import { UserUncheckedCreateWithoutTasksAuthorInputObjectSchema as UserUncheckedCreateWithoutTasksAuthorInputObjectSchema } from './UserUncheckedCreateWithoutTasksAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTasksAuthorInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTasksAuthorInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTasksAuthorInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTasksAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTasksAuthorInput>;
export const UserCreateOrConnectWithoutTasksAuthorInputObjectZodSchema = makeSchema();
