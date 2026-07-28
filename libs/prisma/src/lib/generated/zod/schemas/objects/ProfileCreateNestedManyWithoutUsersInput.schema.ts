import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ProfileCreateWithoutUsersInputObjectSchema as ProfileCreateWithoutUsersInputObjectSchema } from './ProfileCreateWithoutUsersInput.schema';
import { ProfileUncheckedCreateWithoutUsersInputObjectSchema as ProfileUncheckedCreateWithoutUsersInputObjectSchema } from './ProfileUncheckedCreateWithoutUsersInput.schema';
import { ProfileCreateOrConnectWithoutUsersInputObjectSchema as ProfileCreateOrConnectWithoutUsersInputObjectSchema } from './ProfileCreateOrConnectWithoutUsersInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUsersInputObjectSchema), z.lazy(() => ProfileCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProfileCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedManyWithoutUsersInput>;
export const ProfileCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
