import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProfileCreateWithoutUsersInputObjectSchema as ProfileCreateWithoutUsersInputObjectSchema } from './ProfileCreateWithoutUsersInput.schema';
import { ProfileUncheckedCreateWithoutUsersInputObjectSchema as ProfileUncheckedCreateWithoutUsersInputObjectSchema } from './ProfileUncheckedCreateWithoutUsersInput.schema';
import { ProfileCreateOrConnectWithoutUsersInputObjectSchema as ProfileCreateOrConnectWithoutUsersInputObjectSchema } from './ProfileCreateOrConnectWithoutUsersInput.schema';
import { ProfileUpsertWithWhereUniqueWithoutUsersInputObjectSchema as ProfileUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './ProfileUpsertWithWhereUniqueWithoutUsersInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithWhereUniqueWithoutUsersInputObjectSchema as ProfileUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './ProfileUpdateWithWhereUniqueWithoutUsersInput.schema';
import { ProfileUpdateManyWithWhereWithoutUsersInputObjectSchema as ProfileUpdateManyWithWhereWithoutUsersInputObjectSchema } from './ProfileUpdateManyWithWhereWithoutUsersInput.schema';
import { ProfileScalarWhereInputObjectSchema as ProfileScalarWhereInputObjectSchema } from './ProfileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUsersInputObjectSchema), z.lazy(() => ProfileCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => ProfileUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProfileCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => ProfileCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => ProfileUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProfileWhereUniqueInputObjectSchema), z.lazy(() => ProfileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => ProfileUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProfileUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => ProfileUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProfileScalarWhereInputObjectSchema), z.lazy(() => ProfileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProfileUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateManyWithoutUsersNestedInput>;
export const ProfileUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
