import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProfilesInputObjectSchema as UserCreateWithoutProfilesInputObjectSchema } from './UserCreateWithoutProfilesInput.schema';
import { UserUncheckedCreateWithoutProfilesInputObjectSchema as UserUncheckedCreateWithoutProfilesInputObjectSchema } from './UserUncheckedCreateWithoutProfilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutProfilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfilesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutProfilesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutProfilesInput>;
export const UserCreateOrConnectWithoutProfilesInputObjectZodSchema = makeSchema();
