import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProfilesInputObjectSchema as UserUpdateWithoutProfilesInputObjectSchema } from './UserUpdateWithoutProfilesInput.schema';
import { UserUncheckedUpdateWithoutProfilesInputObjectSchema as UserUncheckedUpdateWithoutProfilesInputObjectSchema } from './UserUncheckedUpdateWithoutProfilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutProfilesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfilesInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutProfilesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutProfilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutProfilesInput>;
export const UserUpdateWithWhereUniqueWithoutProfilesInputObjectZodSchema = makeSchema();
