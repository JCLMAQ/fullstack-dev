import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutTokensInputObjectSchema as UserCreateWithoutTokensInputObjectSchema } from './UserCreateWithoutTokensInput.schema';
import { UserUncheckedCreateWithoutTokensInputObjectSchema as UserUncheckedCreateWithoutTokensInputObjectSchema } from './UserUncheckedCreateWithoutTokensInput.schema';
import { UserCreateOrConnectWithoutTokensInputObjectSchema as UserCreateOrConnectWithoutTokensInputObjectSchema } from './UserCreateOrConnectWithoutTokensInput.schema';
import { UserUpsertWithoutTokensInputObjectSchema as UserUpsertWithoutTokensInputObjectSchema } from './UserUpsertWithoutTokensInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTokensInputObjectSchema as UserUpdateToOneWithWhereWithoutTokensInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTokensInput.schema';
import { UserUpdateWithoutTokensInputObjectSchema as UserUpdateWithoutTokensInputObjectSchema } from './UserUpdateWithoutTokensInput.schema';
import { UserUncheckedUpdateWithoutTokensInputObjectSchema as UserUncheckedUpdateWithoutTokensInputObjectSchema } from './UserUncheckedUpdateWithoutTokensInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTokensInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTokensInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTokensInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTokensInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTokensInputObjectSchema), z.lazy(() => UserUpdateWithoutTokensInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTokensInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTokensNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTokensNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTokensNestedInput>;
export const UserUpdateOneRequiredWithoutTokensNestedInputObjectZodSchema = makeSchema();
