import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutStoriesInputObjectSchema as UserCreateWithoutStoriesInputObjectSchema } from './UserCreateWithoutStoriesInput.schema';
import { UserUncheckedCreateWithoutStoriesInputObjectSchema as UserUncheckedCreateWithoutStoriesInputObjectSchema } from './UserUncheckedCreateWithoutStoriesInput.schema';
import { UserCreateOrConnectWithoutStoriesInputObjectSchema as UserCreateOrConnectWithoutStoriesInputObjectSchema } from './UserCreateOrConnectWithoutStoriesInput.schema';
import { UserUpsertWithoutStoriesInputObjectSchema as UserUpsertWithoutStoriesInputObjectSchema } from './UserUpsertWithoutStoriesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutStoriesInputObjectSchema as UserUpdateToOneWithWhereWithoutStoriesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutStoriesInput.schema';
import { UserUpdateWithoutStoriesInputObjectSchema as UserUpdateWithoutStoriesInputObjectSchema } from './UserUpdateWithoutStoriesInput.schema';
import { UserUncheckedUpdateWithoutStoriesInputObjectSchema as UserUncheckedUpdateWithoutStoriesInputObjectSchema } from './UserUncheckedUpdateWithoutStoriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStoriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStoriesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStoriesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutStoriesInputObjectSchema), z.lazy(() => UserUpdateWithoutStoriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStoriesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutStoriesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStoriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutStoriesNestedInput>;
export const UserUpdateOneRequiredWithoutStoriesNestedInputObjectZodSchema = makeSchema();
