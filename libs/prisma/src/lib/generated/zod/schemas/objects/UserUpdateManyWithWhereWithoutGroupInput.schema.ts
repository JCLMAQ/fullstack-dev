import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutGroupInputObjectSchema as UserUncheckedUpdateManyWithoutGroupInputObjectSchema } from './UserUncheckedUpdateManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutGroupInput>;
export const UserUpdateManyWithWhereWithoutGroupInputObjectZodSchema = makeSchema();
