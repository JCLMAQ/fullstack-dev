import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutStoriesInputObjectSchema as UserUpdateWithoutStoriesInputObjectSchema } from './UserUpdateWithoutStoriesInput.schema';
import { UserUncheckedUpdateWithoutStoriesInputObjectSchema as UserUncheckedUpdateWithoutStoriesInputObjectSchema } from './UserUncheckedUpdateWithoutStoriesInput.schema';
import { UserCreateWithoutStoriesInputObjectSchema as UserCreateWithoutStoriesInputObjectSchema } from './UserCreateWithoutStoriesInput.schema';
import { UserUncheckedCreateWithoutStoriesInputObjectSchema as UserUncheckedCreateWithoutStoriesInputObjectSchema } from './UserUncheckedCreateWithoutStoriesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutStoriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStoriesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutStoriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStoriesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutStoriesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutStoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutStoriesInput>;
export const UserUpsertWithoutStoriesInputObjectZodSchema = makeSchema();
