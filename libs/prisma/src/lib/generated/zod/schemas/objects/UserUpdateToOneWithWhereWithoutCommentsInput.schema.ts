import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCommentsInputObjectSchema as UserUpdateWithoutCommentsInputObjectSchema } from './UserUpdateWithoutCommentsInput.schema';
import { UserUncheckedUpdateWithoutCommentsInputObjectSchema as UserUncheckedUpdateWithoutCommentsInputObjectSchema } from './UserUncheckedUpdateWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCommentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCommentsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCommentsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput>;
export const UserUpdateToOneWithWhereWithoutCommentsInputObjectZodSchema = makeSchema();
