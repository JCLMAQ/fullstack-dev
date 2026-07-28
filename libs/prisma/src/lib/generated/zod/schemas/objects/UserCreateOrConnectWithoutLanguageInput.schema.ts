import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLanguageInputObjectSchema as UserCreateWithoutLanguageInputObjectSchema } from './UserCreateWithoutLanguageInput.schema';
import { UserUncheckedCreateWithoutLanguageInputObjectSchema as UserUncheckedCreateWithoutLanguageInputObjectSchema } from './UserUncheckedCreateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutLanguageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguageInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutLanguageInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutLanguageInput>;
export const UserCreateOrConnectWithoutLanguageInputObjectZodSchema = makeSchema();
