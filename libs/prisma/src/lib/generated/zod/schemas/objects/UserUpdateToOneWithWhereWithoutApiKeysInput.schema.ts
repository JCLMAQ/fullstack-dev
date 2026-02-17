import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutApiKeysInputObjectSchema as UserUpdateWithoutApiKeysInputObjectSchema } from './UserUpdateWithoutApiKeysInput.schema';
import { UserUncheckedUpdateWithoutApiKeysInputObjectSchema as UserUncheckedUpdateWithoutApiKeysInputObjectSchema } from './UserUncheckedUpdateWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutApiKeysInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutApiKeysInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutApiKeysInput>;
export const UserUpdateToOneWithWhereWithoutApiKeysInputObjectZodSchema = makeSchema();
