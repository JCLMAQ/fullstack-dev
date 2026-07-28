import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutProfileImagesInputObjectSchema as UserUpdateWithoutProfileImagesInputObjectSchema } from './UserUpdateWithoutProfileImagesInput.schema';
import { UserUncheckedUpdateWithoutProfileImagesInputObjectSchema as UserUncheckedUpdateWithoutProfileImagesInputObjectSchema } from './UserUncheckedUpdateWithoutProfileImagesInput.schema';
import { UserCreateWithoutProfileImagesInputObjectSchema as UserCreateWithoutProfileImagesInputObjectSchema } from './UserCreateWithoutProfileImagesInput.schema';
import { UserUncheckedCreateWithoutProfileImagesInputObjectSchema as UserUncheckedCreateWithoutProfileImagesInputObjectSchema } from './UserUncheckedCreateWithoutProfileImagesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileImagesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutProfileImagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileImagesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutProfileImagesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutProfileImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutProfileImagesInput>;
export const UserUpsertWithoutProfileImagesInputObjectZodSchema = makeSchema();
