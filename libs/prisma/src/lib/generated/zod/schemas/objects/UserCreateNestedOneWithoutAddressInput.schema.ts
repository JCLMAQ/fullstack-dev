import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutAddressInputObjectSchema as UserCreateWithoutAddressInputObjectSchema } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputObjectSchema as UserUncheckedCreateWithoutAddressInputObjectSchema } from './UserUncheckedCreateWithoutAddressInput.schema';
import { UserCreateOrConnectWithoutAddressInputObjectSchema as UserCreateOrConnectWithoutAddressInputObjectSchema } from './UserCreateOrConnectWithoutAddressInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAddressInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAddressInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAddressInput>;
export const UserCreateNestedOneWithoutAddressInputObjectZodSchema = makeSchema();
