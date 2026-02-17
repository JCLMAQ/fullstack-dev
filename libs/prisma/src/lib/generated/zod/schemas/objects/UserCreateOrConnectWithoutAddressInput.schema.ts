import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAddressInputObjectSchema as UserCreateWithoutAddressInputObjectSchema } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputObjectSchema as UserUncheckedCreateWithoutAddressInputObjectSchema } from './UserUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAddressInput>;
export const UserCreateOrConnectWithoutAddressInputObjectZodSchema = makeSchema();
