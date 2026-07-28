import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLanguageInputObjectSchema as UserUpdateWithoutLanguageInputObjectSchema } from './UserUpdateWithoutLanguageInput.schema';
import { UserUncheckedUpdateWithoutLanguageInputObjectSchema as UserUncheckedUpdateWithoutLanguageInputObjectSchema } from './UserUncheckedUpdateWithoutLanguageInput.schema';
import { UserCreateWithoutLanguageInputObjectSchema as UserCreateWithoutLanguageInputObjectSchema } from './UserCreateWithoutLanguageInput.schema';
import { UserUncheckedCreateWithoutLanguageInputObjectSchema as UserUncheckedCreateWithoutLanguageInputObjectSchema } from './UserUncheckedCreateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutLanguageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLanguageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutLanguageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguageInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutLanguageInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutLanguageInput>;
export const UserUpsertWithWhereUniqueWithoutLanguageInputObjectZodSchema = makeSchema();
