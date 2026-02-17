import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutApiKeysInputObjectSchema as UserCreateWithoutApiKeysInputObjectSchema } from './UserCreateWithoutApiKeysInput.schema';
import { UserUncheckedCreateWithoutApiKeysInputObjectSchema as UserUncheckedCreateWithoutApiKeysInputObjectSchema } from './UserUncheckedCreateWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutApiKeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApiKeysInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutApiKeysInput>;
export const UserCreateOrConnectWithoutApiKeysInputObjectZodSchema = makeSchema();
