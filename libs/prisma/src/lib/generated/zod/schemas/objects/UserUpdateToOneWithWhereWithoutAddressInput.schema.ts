import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAddressInputObjectSchema as UserUpdateWithoutAddressInputObjectSchema } from './UserUpdateWithoutAddressInput.schema';
import { UserUncheckedUpdateWithoutAddressInputObjectSchema as UserUncheckedUpdateWithoutAddressInputObjectSchema } from './UserUncheckedUpdateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAddressInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAddressInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAddressInput>;
export const UserUpdateToOneWithWhereWithoutAddressInputObjectZodSchema = makeSchema();
