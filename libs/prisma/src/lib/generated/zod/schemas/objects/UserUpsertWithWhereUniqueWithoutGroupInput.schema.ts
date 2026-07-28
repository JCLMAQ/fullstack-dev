import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGroupInputObjectSchema as UserUpdateWithoutGroupInputObjectSchema } from './UserUpdateWithoutGroupInput.schema';
import { UserUncheckedUpdateWithoutGroupInputObjectSchema as UserUncheckedUpdateWithoutGroupInputObjectSchema } from './UserUncheckedUpdateWithoutGroupInput.schema';
import { UserCreateWithoutGroupInputObjectSchema as UserCreateWithoutGroupInputObjectSchema } from './UserCreateWithoutGroupInput.schema';
import { UserUncheckedCreateWithoutGroupInputObjectSchema as UserUncheckedCreateWithoutGroupInputObjectSchema } from './UserUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutGroupInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGroupInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutGroupInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutGroupInput>;
export const UserUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
