import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutManagerInputObjectSchema as UserCreateWithoutManagerInputObjectSchema } from './UserCreateWithoutManagerInput.schema';
import { UserUncheckedCreateWithoutManagerInputObjectSchema as UserUncheckedCreateWithoutManagerInputObjectSchema } from './UserUncheckedCreateWithoutManagerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutManagerInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutManagerInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutManagerInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutManagerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutManagerInput>;
export const UserCreateOrConnectWithoutManagerInputObjectZodSchema = makeSchema();
