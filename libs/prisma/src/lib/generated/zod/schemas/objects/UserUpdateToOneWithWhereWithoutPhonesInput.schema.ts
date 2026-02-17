import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPhonesInputObjectSchema as UserUpdateWithoutPhonesInputObjectSchema } from './UserUpdateWithoutPhonesInput.schema';
import { UserUncheckedUpdateWithoutPhonesInputObjectSchema as UserUncheckedUpdateWithoutPhonesInputObjectSchema } from './UserUncheckedUpdateWithoutPhonesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPhonesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPhonesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPhonesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPhonesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPhonesInput>;
export const UserUpdateToOneWithWhereWithoutPhonesInputObjectZodSchema = makeSchema();
