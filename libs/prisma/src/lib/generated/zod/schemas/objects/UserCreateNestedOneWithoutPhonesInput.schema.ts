import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutPhonesInputObjectSchema as UserCreateWithoutPhonesInputObjectSchema } from './UserCreateWithoutPhonesInput.schema';
import { UserUncheckedCreateWithoutPhonesInputObjectSchema as UserUncheckedCreateWithoutPhonesInputObjectSchema } from './UserUncheckedCreateWithoutPhonesInput.schema';
import { UserCreateOrConnectWithoutPhonesInputObjectSchema as UserCreateOrConnectWithoutPhonesInputObjectSchema } from './UserCreateOrConnectWithoutPhonesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPhonesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPhonesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPhonesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPhonesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPhonesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPhonesInput>;
export const UserCreateNestedOneWithoutPhonesInputObjectZodSchema = makeSchema();
