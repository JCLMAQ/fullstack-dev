import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutGroupInputObjectSchema as UserUpdateWithoutGroupInputObjectSchema } from './UserUpdateWithoutGroupInput.schema';
import { UserUncheckedUpdateWithoutGroupInputObjectSchema as UserUncheckedUpdateWithoutGroupInputObjectSchema } from './UserUncheckedUpdateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutGroupInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutGroupInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutGroupInput>;
export const UserUpdateWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
