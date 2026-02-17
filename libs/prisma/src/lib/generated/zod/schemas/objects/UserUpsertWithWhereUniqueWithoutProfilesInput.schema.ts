import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProfilesInputObjectSchema as UserUpdateWithoutProfilesInputObjectSchema } from './UserUpdateWithoutProfilesInput.schema';
import { UserUncheckedUpdateWithoutProfilesInputObjectSchema as UserUncheckedUpdateWithoutProfilesInputObjectSchema } from './UserUncheckedUpdateWithoutProfilesInput.schema';
import { UserCreateWithoutProfilesInputObjectSchema as UserCreateWithoutProfilesInputObjectSchema } from './UserCreateWithoutProfilesInput.schema';
import { UserUncheckedCreateWithoutProfilesInputObjectSchema as UserUncheckedCreateWithoutProfilesInputObjectSchema } from './UserUncheckedCreateWithoutProfilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutProfilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfilesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutProfilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfilesInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutProfilesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutProfilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutProfilesInput>;
export const UserUpsertWithWhereUniqueWithoutProfilesInputObjectZodSchema = makeSchema();
