import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutProfileImagesInputObjectSchema as UserUpdateWithoutProfileImagesInputObjectSchema } from './UserUpdateWithoutProfileImagesInput.schema';
import { UserUncheckedUpdateWithoutProfileImagesInputObjectSchema as UserUncheckedUpdateWithoutProfileImagesInputObjectSchema } from './UserUncheckedUpdateWithoutProfileImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileImagesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutProfileImagesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProfileImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProfileImagesInput>;
export const UserUpdateToOneWithWhereWithoutProfileImagesInputObjectZodSchema = makeSchema();
