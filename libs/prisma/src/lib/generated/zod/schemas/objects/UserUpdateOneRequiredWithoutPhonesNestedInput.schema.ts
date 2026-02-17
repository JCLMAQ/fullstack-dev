import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutPhonesInputObjectSchema as UserCreateWithoutPhonesInputObjectSchema } from './UserCreateWithoutPhonesInput.schema';
import { UserUncheckedCreateWithoutPhonesInputObjectSchema as UserUncheckedCreateWithoutPhonesInputObjectSchema } from './UserUncheckedCreateWithoutPhonesInput.schema';
import { UserCreateOrConnectWithoutPhonesInputObjectSchema as UserCreateOrConnectWithoutPhonesInputObjectSchema } from './UserCreateOrConnectWithoutPhonesInput.schema';
import { UserUpsertWithoutPhonesInputObjectSchema as UserUpsertWithoutPhonesInputObjectSchema } from './UserUpsertWithoutPhonesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPhonesInputObjectSchema as UserUpdateToOneWithWhereWithoutPhonesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPhonesInput.schema';
import { UserUpdateWithoutPhonesInputObjectSchema as UserUpdateWithoutPhonesInputObjectSchema } from './UserUpdateWithoutPhonesInput.schema';
import { UserUncheckedUpdateWithoutPhonesInputObjectSchema as UserUncheckedUpdateWithoutPhonesInputObjectSchema } from './UserUncheckedUpdateWithoutPhonesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPhonesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPhonesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPhonesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPhonesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPhonesInputObjectSchema), z.lazy(() => UserUpdateWithoutPhonesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPhonesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPhonesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPhonesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPhonesNestedInput>;
export const UserUpdateOneRequiredWithoutPhonesNestedInputObjectZodSchema = makeSchema();
