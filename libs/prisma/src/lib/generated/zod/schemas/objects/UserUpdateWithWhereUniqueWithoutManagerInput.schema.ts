import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutManagerInputObjectSchema as UserUpdateWithoutManagerInputObjectSchema } from './UserUpdateWithoutManagerInput.schema';
import { UserUncheckedUpdateWithoutManagerInputObjectSchema as UserUncheckedUpdateWithoutManagerInputObjectSchema } from './UserUncheckedUpdateWithoutManagerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutManagerInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutManagerInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutManagerInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutManagerInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutManagerInput>;
export const UserUpdateWithWhereUniqueWithoutManagerInputObjectZodSchema = makeSchema();
