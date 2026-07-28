import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPhonesInputObjectSchema as UserCreateWithoutPhonesInputObjectSchema } from './UserCreateWithoutPhonesInput.schema';
import { UserUncheckedCreateWithoutPhonesInputObjectSchema as UserUncheckedCreateWithoutPhonesInputObjectSchema } from './UserUncheckedCreateWithoutPhonesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPhonesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPhonesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPhonesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPhonesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPhonesInput>;
export const UserCreateOrConnectWithoutPhonesInputObjectZodSchema = makeSchema();
