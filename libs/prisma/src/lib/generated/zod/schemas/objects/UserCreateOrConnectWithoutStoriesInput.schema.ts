import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutStoriesInputObjectSchema as UserCreateWithoutStoriesInputObjectSchema } from './UserCreateWithoutStoriesInput.schema';
import { UserUncheckedCreateWithoutStoriesInputObjectSchema as UserUncheckedCreateWithoutStoriesInputObjectSchema } from './UserUncheckedCreateWithoutStoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutStoriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStoriesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutStoriesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutStoriesInput>;
export const UserCreateOrConnectWithoutStoriesInputObjectZodSchema = makeSchema();
