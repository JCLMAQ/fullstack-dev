import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutApiKeysInputObjectSchema as UserCreateWithoutApiKeysInputObjectSchema } from './UserCreateWithoutApiKeysInput.schema';
import { UserUncheckedCreateWithoutApiKeysInputObjectSchema as UserUncheckedCreateWithoutApiKeysInputObjectSchema } from './UserUncheckedCreateWithoutApiKeysInput.schema';
import { UserCreateOrConnectWithoutApiKeysInputObjectSchema as UserCreateOrConnectWithoutApiKeysInputObjectSchema } from './UserCreateOrConnectWithoutApiKeysInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutApiKeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApiKeysInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutApiKeysInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutApiKeysInput>;
export const UserCreateNestedOneWithoutApiKeysInputObjectZodSchema = makeSchema();
