import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutProfilesInputObjectSchema as UserUncheckedUpdateManyWithoutProfilesInputObjectSchema } from './UserUncheckedUpdateManyWithoutProfilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutProfilesInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutProfilesInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutProfilesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutProfilesInput>;
export const UserUpdateManyWithWhereWithoutProfilesInputObjectZodSchema = makeSchema();
