import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithoutUsersInputObjectSchema as ProfileUpdateWithoutUsersInputObjectSchema } from './ProfileUpdateWithoutUsersInput.schema';
import { ProfileUncheckedUpdateWithoutUsersInputObjectSchema as ProfileUncheckedUpdateWithoutUsersInputObjectSchema } from './ProfileUncheckedUpdateWithoutUsersInput.schema';
import { ProfileCreateWithoutUsersInputObjectSchema as ProfileCreateWithoutUsersInputObjectSchema } from './ProfileCreateWithoutUsersInput.schema';
import { ProfileUncheckedCreateWithoutUsersInputObjectSchema as ProfileUncheckedCreateWithoutUsersInputObjectSchema } from './ProfileUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileUpdateWithoutUsersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutUsersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const ProfileUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithWhereUniqueWithoutUsersInput>;
export const ProfileUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
