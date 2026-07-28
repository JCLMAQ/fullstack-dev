import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutPhonesInputObjectSchema as UserUpdateWithoutPhonesInputObjectSchema } from './UserUpdateWithoutPhonesInput.schema';
import { UserUncheckedUpdateWithoutPhonesInputObjectSchema as UserUncheckedUpdateWithoutPhonesInputObjectSchema } from './UserUncheckedUpdateWithoutPhonesInput.schema';
import { UserCreateWithoutPhonesInputObjectSchema as UserCreateWithoutPhonesInputObjectSchema } from './UserCreateWithoutPhonesInput.schema';
import { UserUncheckedCreateWithoutPhonesInputObjectSchema as UserUncheckedCreateWithoutPhonesInputObjectSchema } from './UserUncheckedCreateWithoutPhonesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPhonesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPhonesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPhonesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPhonesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPhonesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPhonesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPhonesInput>;
export const UserUpsertWithoutPhonesInputObjectZodSchema = makeSchema();
