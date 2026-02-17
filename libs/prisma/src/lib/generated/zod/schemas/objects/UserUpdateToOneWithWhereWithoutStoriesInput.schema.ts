import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutStoriesInputObjectSchema as UserUpdateWithoutStoriesInputObjectSchema } from './UserUpdateWithoutStoriesInput.schema';
import { UserUncheckedUpdateWithoutStoriesInputObjectSchema as UserUncheckedUpdateWithoutStoriesInputObjectSchema } from './UserUncheckedUpdateWithoutStoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutStoriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutStoriesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutStoriesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStoriesInput>;
export const UserUpdateToOneWithWhereWithoutStoriesInputObjectZodSchema = makeSchema();
