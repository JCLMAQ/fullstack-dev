import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutUserSecretInputObjectSchema as UserUpdateWithoutUserSecretInputObjectSchema } from './UserUpdateWithoutUserSecretInput.schema';
import { UserUncheckedUpdateWithoutUserSecretInputObjectSchema as UserUncheckedUpdateWithoutUserSecretInputObjectSchema } from './UserUncheckedUpdateWithoutUserSecretInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutUserSecretInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUserSecretInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutUserSecretInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserSecretInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserSecretInput>;
export const UserUpdateToOneWithWhereWithoutUserSecretInputObjectZodSchema = makeSchema();
