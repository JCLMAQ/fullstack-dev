import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateWithoutUsersInputObjectSchema as ProfileUpdateWithoutUsersInputObjectSchema } from './ProfileUpdateWithoutUsersInput.schema';
import { ProfileUncheckedUpdateWithoutUsersInputObjectSchema as ProfileUncheckedUpdateWithoutUsersInputObjectSchema } from './ProfileUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateWithoutUsersInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const ProfileUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateWithWhereUniqueWithoutUsersInput>;
export const ProfileUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
