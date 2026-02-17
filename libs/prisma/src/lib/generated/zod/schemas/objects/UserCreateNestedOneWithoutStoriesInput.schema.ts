import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutStoriesInputObjectSchema as UserCreateWithoutStoriesInputObjectSchema } from './UserCreateWithoutStoriesInput.schema';
import { UserUncheckedCreateWithoutStoriesInputObjectSchema as UserUncheckedCreateWithoutStoriesInputObjectSchema } from './UserUncheckedCreateWithoutStoriesInput.schema';
import { UserCreateOrConnectWithoutStoriesInputObjectSchema as UserCreateOrConnectWithoutStoriesInputObjectSchema } from './UserCreateOrConnectWithoutStoriesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutStoriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutStoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStoriesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutStoriesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutStoriesInput>;
export const UserCreateNestedOneWithoutStoriesInputObjectZodSchema = makeSchema();
