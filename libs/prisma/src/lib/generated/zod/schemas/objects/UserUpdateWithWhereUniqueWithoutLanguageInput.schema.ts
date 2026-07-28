import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLanguageInputObjectSchema as UserUpdateWithoutLanguageInputObjectSchema } from './UserUpdateWithoutLanguageInput.schema';
import { UserUncheckedUpdateWithoutLanguageInputObjectSchema as UserUncheckedUpdateWithoutLanguageInputObjectSchema } from './UserUncheckedUpdateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutLanguageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLanguageInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutLanguageInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutLanguageInput>;
export const UserUpdateWithWhereUniqueWithoutLanguageInputObjectZodSchema = makeSchema();
