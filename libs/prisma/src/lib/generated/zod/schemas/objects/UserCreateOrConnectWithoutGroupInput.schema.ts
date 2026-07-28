import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutGroupInputObjectSchema as UserCreateWithoutGroupInputObjectSchema } from './UserCreateWithoutGroupInput.schema';
import { UserUncheckedCreateWithoutGroupInputObjectSchema as UserUncheckedCreateWithoutGroupInputObjectSchema } from './UserUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutGroupInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutGroupInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutGroupInput>;
export const UserCreateOrConnectWithoutGroupInputObjectZodSchema = makeSchema();
