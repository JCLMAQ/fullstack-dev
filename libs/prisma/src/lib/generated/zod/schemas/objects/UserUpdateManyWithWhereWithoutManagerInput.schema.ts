import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserScalarWhereInputObjectSchema as UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutManagerInputObjectSchema as UserUncheckedUpdateManyWithoutManagerInputObjectSchema } from './UserUncheckedUpdateManyWithoutManagerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutManagerInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutManagerInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutManagerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutManagerInput>;
export const UserUpdateManyWithWhereWithoutManagerInputObjectZodSchema = makeSchema();
