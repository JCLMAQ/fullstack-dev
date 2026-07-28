import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrgsInputObjectSchema as UserUpdateWithoutOrgsInputObjectSchema } from './UserUpdateWithoutOrgsInput.schema';
import { UserUncheckedUpdateWithoutOrgsInputObjectSchema as UserUncheckedUpdateWithoutOrgsInputObjectSchema } from './UserUncheckedUpdateWithoutOrgsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutOrgsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutOrgsInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutOrgsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutOrgsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutOrgsInput>;
export const UserUpdateWithWhereUniqueWithoutOrgsInputObjectZodSchema = makeSchema();
