import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrgsInputObjectSchema as UserCreateWithoutOrgsInputObjectSchema } from './UserCreateWithoutOrgsInput.schema';
import { UserUncheckedCreateWithoutOrgsInputObjectSchema as UserUncheckedCreateWithoutOrgsInputObjectSchema } from './UserUncheckedCreateWithoutOrgsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutOrgsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrgsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOrgsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrgsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutOrgsInput>;
export const UserCreateOrConnectWithoutOrgsInputObjectZodSchema = makeSchema();
