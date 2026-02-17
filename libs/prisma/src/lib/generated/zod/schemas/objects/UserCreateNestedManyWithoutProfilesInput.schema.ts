import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutProfilesInputObjectSchema as UserCreateWithoutProfilesInputObjectSchema } from './UserCreateWithoutProfilesInput.schema';
import { UserUncheckedCreateWithoutProfilesInputObjectSchema as UserUncheckedCreateWithoutProfilesInputObjectSchema } from './UserUncheckedCreateWithoutProfilesInput.schema';
import { UserCreateOrConnectWithoutProfilesInputObjectSchema as UserCreateOrConnectWithoutProfilesInputObjectSchema } from './UserCreateOrConnectWithoutProfilesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfilesInputObjectSchema), z.lazy(() => UserCreateWithoutProfilesInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutProfilesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutProfilesInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutProfilesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserCreateNestedManyWithoutProfilesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutProfilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedManyWithoutProfilesInput>;
export const UserCreateNestedManyWithoutProfilesInputObjectZodSchema = makeSchema();
