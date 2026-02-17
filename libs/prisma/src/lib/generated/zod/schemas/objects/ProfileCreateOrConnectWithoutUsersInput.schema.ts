import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutUsersInputObjectSchema as ProfileCreateWithoutUsersInputObjectSchema } from './ProfileCreateWithoutUsersInput.schema';
import { ProfileUncheckedCreateWithoutUsersInputObjectSchema as ProfileUncheckedCreateWithoutUsersInputObjectSchema } from './ProfileUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutUsersInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutUsersInput>;
export const ProfileCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
