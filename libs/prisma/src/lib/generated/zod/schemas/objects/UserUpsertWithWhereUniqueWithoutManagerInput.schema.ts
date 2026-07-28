import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutManagerInputObjectSchema as UserUpdateWithoutManagerInputObjectSchema } from './UserUpdateWithoutManagerInput.schema';
import { UserUncheckedUpdateWithoutManagerInputObjectSchema as UserUncheckedUpdateWithoutManagerInputObjectSchema } from './UserUncheckedUpdateWithoutManagerInput.schema';
import { UserCreateWithoutManagerInputObjectSchema as UserCreateWithoutManagerInputObjectSchema } from './UserCreateWithoutManagerInput.schema';
import { UserUncheckedCreateWithoutManagerInputObjectSchema as UserUncheckedCreateWithoutManagerInputObjectSchema } from './UserUncheckedCreateWithoutManagerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutManagerInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutManagerInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutManagerInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutManagerInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutManagerInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutManagerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutManagerInput>;
export const UserUpsertWithWhereUniqueWithoutManagerInputObjectZodSchema = makeSchema();
