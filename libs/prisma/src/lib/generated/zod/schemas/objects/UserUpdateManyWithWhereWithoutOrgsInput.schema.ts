import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutOrgsInputObjectSchema as UserUncheckedUpdateManyWithoutOrgsInputObjectSchema } from './UserUncheckedUpdateManyWithoutOrgsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutOrgsInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutOrgsInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutOrgsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutOrgsInput>;
export const UserUpdateManyWithWhereWithoutOrgsInputObjectZodSchema = makeSchema();
