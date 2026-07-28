import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrgsInputObjectSchema as UserUpdateWithoutOrgsInputObjectSchema } from './UserUpdateWithoutOrgsInput.schema';
import { UserUncheckedUpdateWithoutOrgsInputObjectSchema as UserUncheckedUpdateWithoutOrgsInputObjectSchema } from './UserUncheckedUpdateWithoutOrgsInput.schema';
import { UserCreateWithoutOrgsInputObjectSchema as UserCreateWithoutOrgsInputObjectSchema } from './UserCreateWithoutOrgsInput.schema';
import { UserUncheckedCreateWithoutOrgsInputObjectSchema as UserUncheckedCreateWithoutOrgsInputObjectSchema } from './UserUncheckedCreateWithoutOrgsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutOrgsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrgsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutOrgsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrgsInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutOrgsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutOrgsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutOrgsInput>;
export const UserUpsertWithWhereUniqueWithoutOrgsInputObjectZodSchema = makeSchema();
