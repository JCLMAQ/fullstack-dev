import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ProfileScalarWhereInputObjectSchema as ProfileScalarWhereInputObjectSchema } from './ProfileScalarWhereInput.schema';
import { ProfileUpdateManyMutationInputObjectSchema as ProfileUpdateManyMutationInputObjectSchema } from './ProfileUpdateManyMutationInput.schema';
import { ProfileUncheckedUpdateManyWithoutUsersInputObjectSchema as ProfileUncheckedUpdateManyWithoutUsersInputObjectSchema } from './ProfileUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const ProfileUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.ProfileUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateManyWithWhereWithoutUsersInput>;
export const ProfileUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
